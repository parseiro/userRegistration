import React, {useEffect, useState} from "react";
import {Label, Select} from "flowbite-react";

interface EstadoCidadeProps {
    cidade: string;
    state: string;
    setEstado: Function;
    setCidade: Function;
}

interface State {
    id: number;
    nome: string;
}

interface City {
    id: number;
    nome: string;
}

async function getEstados(): Promise<State[]> {
    const resp = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
    return await resp.json();
}

async function getCitiesByStateId(stateId: number): Promise<City[]> {
    const resp = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios?orderBy=nome`);
    return await resp.json();
}

function EstadoCidade(props: EstadoCidadeProps) {
    const {cidade, state, setCidade, setEstado} = props;

    const [states, setStates] = useState<State[]>([]);
    const [cities, setCities] = useState<City[]>([]);

    useEffect(() => {
        getEstados().then(setStates);
    });

    useEffect(() => {
        if (state && state.length > 0) {
            setCities([]);
            const stateId = states.find((e) => e.nome === state)?.id;
            if (stateId) {
                getCitiesByStateId(stateId).then(setCities);
            }
        }
    }, [state]);

    return (
        <>
            <Label htmlFor="state">Brazilian State</Label>
            <Select
                id="state"
                required
                value={state}
                onChange={(e) => {
                    const estado = e.target.value;
                    setEstado(estado);
                }}
            >
                <option value="">Select</option>
                {states.map((e) => (<option key={e.id}
                                             value={e.nome}>{e.nome}</option>))}
            </Select>
            {state?.length > 0 && cities?.length === 0 && <p>Fetching cities...</p>}
            {state?.length > 0 && cities?.length > 0 && (
                <>
                    <Label htmlFor="state">City</Label>
                    <Select
                        id="city"
                        required
                        value={cidade}
                        onChange={(e) => {
                            const cidade = e.target.value;
                            setCidade(cidade);
                        }}
                    >
                        <option value="">Select</option>
                        {cities.map((e) => (<option key={e.id}
                                                     value={e.nome}>{e.nome}</option>))}
                    </Select>
                </>
            )}
        </>
    );
}

export default React.memo(EstadoCidade);
