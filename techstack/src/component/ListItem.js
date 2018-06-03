import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation,
    Platform,
    UIManager } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../common';
import * as action from '../actions';

class ListItem extends Component { 
    componentWillUpdate() {
        if (Platform.OS === 'android') { UIManager.setLayoutAnimationEnabledExperimental(true); }
        LayoutAnimation.spring();

    }
    renderDescription() {
        const { library, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text styke={{ flex: 1}}>{library.description}</Text>
                </CardSection>
                
            );
        }
    }
    render() {
        const { id, title } = this.props.library;
        const { titleStyle } = styles;
        

        return (
            <TouchableWithoutFeedback 
            onPress={() => this.props.selectLibary(id)}
            >
               <View>
                <CardSection>
                    <Text style={titleStyle}> 
                      {title}
                    </Text>
                </CardSection>
                {this.renderDescription()}

               </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibId === ownProps.library.id;
    return { expanded: expanded };
};

export default connect(mapStateToProps, action)(ListItem);
