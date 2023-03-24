import Head from 'next/head'
import React, {useState} from "react";
import {Label, Radio, Select, TextInput} from 'flowbite-react';
import EstadoCidade from "@/EstadoCidade";


interface user {
    firstName: string;
    lastName: string;
    email: string;
    state: string;
    city: string;
    module: string;
    birthDay: string;
    birthMonth: string;
    birthYear: string;
}

function Home() {
    const [state, setState] = useState<user>({
        firstName: '',
        lastName: '',
        email: '',
        state: '',
        city: '',
        module: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {id, value} = e.target;
        setState({...state, [id]: value});
    }

    return (
        <>
            <Head>
                <title>Formulário</title>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1"/>
                <link rel="icon"
                      href="/favicon.ico"/>
            </Head>
            <main>
                <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                        <form action="#">
                            <h2 className="mb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white">Informações</h2>
                            <div className="grid gap-4 mb-4 md:gap-6 md:grid-cols-2 sm:mb-8">
                                <div>
                                    <Label htmlFor="firstName">First name</Label>
                                    <TextInput
                                        id="firstName"
                                        required
                                        value={state.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="firstName">Last name</Label>
                                    <TextInput
                                        id="lastName"
                                        required
                                        value={state.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="birthDay">Birth date</Label>
                                    <div className="flex gap-2">
                                        <Select
                                            id="birthDay"
                                            required
                                            className="w-[6rem]"
                                            onChange={handleChange}
                                        >
                                            <option value="">Day</option>
                                            {Array.from({length: 31}, (_, i) => i + 1).map((day) => (
                                                <option key={day}>{day}</option>))}
                                        </Select>
                                        <Select
                                            id="birthMonth"
                                            required
                                            className="w-[6rem]"
                                            onChange={handleChange}
                                        >
                                            <option value="">Month</option>
                                            <option value="1">January</option>
                                            <option value="2">February</option>
                                            <option value="3">March</option>
                                            <option value="4">April</option>
                                            <option value="5">May</option>
                                            <option value="6">June</option>
                                            <option value="7">July</option>
                                            <option value="8">August</option>
                                            <option value="9">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </Select>
                                        <Select
                                            id="birthYear"
                                            required
                                            className="w-[6rem]"
                                            onChange={handleChange}
                                        >
                                            <option value="">Year</option>
                                            {Array.from({length: 110}, (_, i) => new Date().getFullYear() - i).map((year) => (
                                                <option key={year}>{year}</option>))}
                                        </Select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email"
                                           id="email"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                           placeholder="name@company.com"
                                           required
                                           value={state.email}
                                           onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <EstadoCidade state={state.state}
                                                  cidade={state.city}
                                                  setEstado={(estado: string) => setState({
                                                      ...state,
                                                      state: estado,
                                                      city: ''
                                                  })}
                                                  setCidade={(cidade: string) => setState({...state, city: cidade})}
                                    />
                                </div>
                                <div>
                                    <fieldset className="flex flex-col gap-4">
                                        <legend>Current module</legend>
                                        <div className="flex items-center gap-2">
                                            <Radio
                                                id="fundamentals"
                                                value="fundamentals"
                                                name="module"
                                                checked={state.module === 'fundamentals'}
                                                onChange={(e) => setState({...state, module: e.target.value})}
                                            />
                                            <Label htmlFor="fundamentals">
                                                Fundamentos
                                            </Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Radio
                                                id="frontEnd"
                                                value="frontEnd"
                                                name="module"
                                                checked={state.module === 'frontEnd'}
                                                onChange={(e) => setState({...state, module: e.target.value})}
                                            />
                                            <Label htmlFor="frontEnd">
                                                Front-end
                                            </Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Radio
                                                id="backEnd"
                                                value="backEnd"
                                                name="module"
                                                checked={state.module === 'backEnd'}
                                                onChange={(e) => setState({...state, module: e.target.value})}
                                            />
                                            <Label htmlFor="backEnd">
                                                Back-end
                                            </Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Radio
                                                id="computerScience"
                                                value="computerScience"
                                                name="module"
                                                checked={state.module === 'computerScience'}
                                                onChange={(e) => setState({...state, module: e.target.value})}
                                            />
                                            <Label htmlFor="computerScience">
                                                Ciência da Computação
                                            </Label>
                                        </div>
                                    </fieldset>

                                </div>
                            </div>
                            <button type="submit"
                                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                Add user
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

export default React.memo(Home);
