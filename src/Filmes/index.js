import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

import Detalhes from '../Detalhes';

function Filmes({ data }){

    const [visible, setVisible] = useState(false);

    return(
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image
                    source={{ uri: data.foto }}
                    style={styles.capa}
                />
                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={ () => setVisible(true) } >
                        <Text style={styles.botaoTexto}>Leia Mais</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={true} animationType='slide' visible={visible}>
                <Detalhes filme={data} voltar={() => setVisible(false)} />
            </Modal>

        </View>
    );
}

export default Filmes;

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        margin: 15,
        elevation: 2,
    },

    capa:{
        height: 250,
        zIndex: 2,
    },

    titulo:{
        padding: 15,
        fontSize: 18,
    },
    areaBotao:{
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,
    },
    botao:{
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    botaoTexto:{
        textAlign: 'center',
        color: '#fff'
    },
});
