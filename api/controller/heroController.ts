import express from "express";
import { Hero } from "../types/Hero";

const heroes: Hero[] = [
    {
        realName: "Carol Danvers",
        nickname: "Capitã Marvel",
        description:
            "Uma das mulheres mais poderosas do universo após ter sido exposta ao poder de um cristal Kree. Com habilidades que incluem voo, projeção de energia e força sobre-humana, Carol Danvers se tornou uma das principais defensoras da Terra e do cosmos.",
    },
    {
        realName: "Bruce Banner",
        nickname: "Hulk",
        description:
            "Tendo sofrido uma explosão de raios gama enquanto tentava salvar a vida de uma adolescente, Dr. Bruce Banner foi transformado na criatura poderosa chamada Hulk. Sendo um herói muitas vezes mal compreendido, quanto mais zangado o Hulk fica, mais forte ele se torna.",
    },
    {
        realName: "Tony Stark",
        nickname: "Homem de Ferro",
        description:
            "Um bilionário inventor e empresário que criou uma armadura avançada para salvar sua própria vida. Como Homem de Ferro, ele usa sua inteligência e tecnologia para proteger o mundo dos vilões.",
    },
    {
        realName: "Steve Rogers",
        nickname: "Capitão América",
        description:
            "Criado durante a Segunda Guerra Mundial através do Projeto Renascimento, Steve Rogers é um super-soldado com valores morais inabaláveis e dedicação à justiça. Seu escudo quase indestrutível é seu símbolo mais característico.",
    },
    {
        realName: "Thor Odinson",
        nickname: "Thor",
        description:
            "O príncipe de Asgard e Deus do Trovão, Thor possui o martelo Mjolnir mágico. Com seus poderes divinos e senso de honra, ele defende tanto seu reino quanto a Terra contra ameaças cósmicas.",
    },
    {
        realName: "Peter Parker",
        nickname: "Homem-Aranha",
        description:
            "Após ser picado por uma aranha geneticamente modificada, Peter Parker ganhou habilidades sobre-humanas. Usando suas capacidades para combater o crime, ele vive pelo lema 'com grandes poderes vêm grandes responsabilidades'.",
    },
    {
        realName: "Natasha Romanoff",
        nickname: "Viúva Negra",
        description:
            "Uma agente secreta altamente treinada e assassina, Natasha Romanoff trabalhou para a HYDRA antes de redimir-se e se juntar aos Vingadores. Seus reflexos e habilidades em combate são praticamente perfeitos.",
    },
    {
        realName: "James Rhodes",
        nickname: "Máquina de Guerra",
        description:
            "O melhor amigo de Tony Stark e piloto militar, James Rhodes herdou uma versão da armadura do Homem de Ferro para se tornar o Máquina de Guerra. Mais tarde recebeu sua própria armadura avançada.",
    },
    {
        realName: "Matt Murdock",
        nickname: "Demolidor",
        description:
            "Um advogado cego que usa seus outros sentidos superdesenvolvidos para lutar contra o crime em Hell's Kitchen. Seu compromisso com a justiça o leva a caminhos morais complexos.",
    },
    {
        realName: "Wanda Maximoff",
        nickname: "Feiticeira Escarlate",
        description:
            "Uma mutante com poderes mágicos baseados na manipulação da realidade. Após perder seu controle emocional devido à dor pessoal, ela se tornou uma das ameaças mais poderosas do universo Marvel.",
    },
    {
        realName: "Sam Wilson",
        nickname: "Falcão",
        description:
            "Um ex-pararesgate militar que se tornou um dos aliados mais próximos do Capitão América. Com suas asas artificiais e habilidades de voo, ele patrulha os céus protegendo a humanidade.",
    },
];

const getHeroes = (req: express.Request, res: express.Response) => {
    res.status(200).json({
        status: "success",
        results: heroes.length,
        data: {
            heroes,
        },
    });
};

export { getHeroes };
