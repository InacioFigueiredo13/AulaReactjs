import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export default function ProximosLancamentos({titulo, data, imagem}){
    return(
        <TouchableOpacity style={estilo.containerJogos}>
            <Image
            style={estilo.images}
            source={require(`../../imagens/${imagem}`)}
            />

            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.data}>{data}</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    containerJogos: {
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width: 300,
        height: 200,
        marginLeft: 8
    },
    titulo: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold"
    },
    data: {
        alignItems: "right",
        color: "green",
        fontSize: 12,
        marginLeft: 200,
        marginTop: 2,
        fontWeight: "bold"
    },
    images: {
        width: "100%",
        height: "100%",
        borderRadius: 25
    }
});
