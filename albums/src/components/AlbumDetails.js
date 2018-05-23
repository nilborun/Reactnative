import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ albumobj }) => {
    const { title, artist, thumbnail_image, image, url } = albumobj;
    const { thumnailStyle, 
        headerContentStyle, 
        thumnailContainerStyle,
        headerTextStyle,
        imagesStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumnailContainerStyle}>
                    <Image 
                    style={thumnailStyle}
                    source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}> {title} </Text>
                    <Text> {artist} </Text>
                </View>
                
            </CardSection>  

            <CardSection>
                <Image 
                style={imagesStyle}
                source={{ uri: image }} 
                />
            </CardSection>  

            <CardSection>
                <Button 
                onPress={() => Linking.openURL(url)}
                buttonText={'Buy Now!'}
                />
            </CardSection>
        </Card>
    );

};

const styles = {
    headerContentStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumnailStyle: {
        height: 50,
        width: 50,
    },
    thumnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imagesStyle: {
        height: 300,
        width: null,
        flex: 1
    }
};


export default AlbumDetails;
