import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';

import TextFieldGroup from '../common/TextFieldGroup';
import DateFieldGroup from '../common/DateFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectFieldGroup from '../common/SelectFieldGroup';
import { createEvent } from '../../actions/eventActions';

const sportList = ["Футбол", "Волейбол" ,"Баскетбол", "Бадминтон", "Настольный Теннис", "Бег", "Шахматы", "Теннис", "Воркаут"];

class CreateEvent extends Component{
    constructor(props){
        super(props);
        this.state = {
            nameofevent: '',
            typeofsport: '',
            numberofplayer: '',
            imageURL: '',
            location: '',
            start: '',
            description: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        window.scrollTo(0, 0);

        if(this.props.match.params.id){
            const event = this.props.event.event;

            this.setState({
                nameofevent: event.nameofevent,
                typeofsport: event.typeofsport,
                numberofplayer: event.numberofplayer,
                imageURL: event.imageURL,
                location: event.location,
                start: event.start,
                description: event.description
            });
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }
    
    onSubmit(e){
        e.preventDefault();
        
        const eventData = {
            nameofevent: this.state.nameofevent,
            typeofsport: this.state.typeofsport,
            numberofplayer: this.state.numberofplayer,
            imageURL: this.state.imageURL,
            location: this.state.location,
            start: this.state.start,
            description: this.state.description
        };
        
        this.props.createEvent(eventData, this.props.history);
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    render(){
        const {errors} = this.state;
        
        return(
            <Grid container justifyContent="center" className="marginX-1">
                <Grid item xs={12} sm={8} md={6}>
                    <Card className="card">
                        <CardContent>
                            <Typography variant="h3" component="h1" align="center" gutterBottom>
                            Проведите свое мероприятие
                            </Typography>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    label="Название *"
                                    placeholder=""
                                    name="nameofevent"
                                    type="name"
                                    value={this.state.nameofevent}
                                    onChange={this.onChange}
                                    error={errors.nameofevent}
                                />
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <SelectFieldGroup
                                            label="Вид спорта *"
                                            name="typeofsport"
                                            type="name"
                                            value={this.state.typeofsport}
                                            onChange={this.onChange}
                                            sportList={sportList}
                                            error={errors.typeofsport}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextFieldGroup
                                            label="Количество игроков *"
                                            placeholder="2-100"
                                            name="numberofplayer"
                                            type="number"
                                            value={this.state.numberofplayer}
                                            onChange={this.onChange}
                                            error={errors.numberofplayer}
                                        />
                                    </Grid>
                                </Grid>
                                <TextFieldGroup
                                    label="URL картинки"
                                    placeholder="пример: https://unsplash.com/photos/ball-under-basketball-ring-BfphcCvhl6E"
                                    name="imageURL"
                                    type="name"
                                    value={this.state.imageURL}
                                    onChange={this.onChange}
                                    error={errors.imageURL}
                                />
                                <TextFieldGroup
                                    label="Место"
                                    placeholder="пример: ​Калыка Акиева 91,Бишкек"
                                    name="location"
                                    type="name"
                                    value={this.state.location}
                                    onChange={this.onChange}
                                    error={errors.location}
                                />
                                <DateFieldGroup
                                    label="Дата начала"
                                    name="start"
                                    value={this.state.start}
                                    onChange={this.onChange}
                                    error={errors.start}
                                />
                                <TextAreaFieldGroup
                                    label="Описание"
                                    placeholder="Подробности вашего мероприятия"
                                    name="description"
                                    type="name"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    error={errors.description}
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
    event: state.events,
    errors: state.errors
});

export default connect(mapStateToProps, {createEvent})(withRouter(CreateEvent));