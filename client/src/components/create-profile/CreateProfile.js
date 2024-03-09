import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            handle: '',
            location: '',
            favoriteSport: '',
            bio: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }
    
    onSubmit(e){
        e.preventDefault();
        
        const profileData = {
            handle: this.state.handle,
            location: this.state.location,
            favoriteSport: this.state.favoriteSport,
            bio: this.state.bio
        };
        
        this.props.createProfile(profileData, this.props.history);
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        const {errors} = this.state;
        
        return(
            <Grid container justify="center" className="marginX-1">
                <Grid item xs={12} sm={8} md={6}>
                    <Card className="card">
                        <CardContent>
                            <Typography variant="h3" component="h1" align="center" gutterBottom>
                                Создать профиль
                            </Typography>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    label="имя для профиля *"
                                    placeholder="имя для профиля"
                                    name="handle"
                                    value={this.state.handle}
                                    onChange={this.onChange}
                                    error={errors.handle}
                                    info="Уникальное имя для вашего профиля"
                                />
                                <TextFieldGroup
                                    label="Место"
                                    placeholder="Место"
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.onChange}
                                    error={errors.location}
                                />
                                <TextFieldGroup
                                    label="Любимые виды спорта *"
                                    placeholder="Любимые виды спорта"
                                    name="favoriteSport"
                                    value={this.state.favoriteSport}
                                    onChange={this.onChange}
                                    error={errors.favoriteSport}
                                    info="используйте значения, разделенные запятой (например, Шахматы, Теннис, Футбол)."
                                />
                                <TextAreaFieldGroup
                                    label="О себе"
                                    placeholder="Коротая информация о себе"
                                    name="bio"
                                    value={this.state.bio}
                                    onChange={this.onChange}
                                    error={errors.bio}
                                />
                                <Button className="primary-color marginB-2" type="submit" variant="contained" fullWidth>
                                    Создать
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, {createProfile})(withRouter(CreateProfile));