//import React from 'react';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { EnhancedEncryptionSharp } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    container : {
        display: 'flex',
        flexWrap: 'wrap',
    },
    TextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 500,
    },
}));


function formatYear(v){
    return `民國${(v.slice(0,4))-1911}年-${v.slice(5,7)}月-${v.slice(8,10)}號`;
}

export default function DatePickers(){
    const classes = useStyles();
    const [newvalue,value]=useState("民國110年-05月-24號")
    //var changeyear = DatePicker(year);
    //function change() = formatYear();

    return(      
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Opening Date"
                type="date"
                defaultValue="2021-05-24"
                className={classes.textField}
                format="YYYY-MM-DD"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={ (event) => {
                    value(formatYear(event.target.value));
                }}
            />
            <TextField
                id="chdate"
                label="阿公店開店日選擇"
                className={classes.textField}
                value={newvalue}
            />
        </form>
    );
}