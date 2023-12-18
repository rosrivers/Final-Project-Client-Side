import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const stylesSheet = makeStyles(() => ({
    container: {
        width: '500px',
        backgroundColor: '#e6e6e6',
        borderRadius: '5px',
        margin: 'auto',
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
        textDecoration: 'none'
    },
    customize_bar: {
        backgroundColor: '#597bb5',
        shadows: ['none'],
    },
    title_container: {
        backgroundColor: '#c5c8d6',
        marginBottom: '15px',
        textAlign: 'center',
        borderRadius: '5px',
        padding: '3px'
    },
}));


const EditStudentView = (props) => {
    const { handleChange, handleSubmit } = props;
    const classes = stylesSheet();

    return (
        <div>
            <h1>Edit Student</h1>
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.title_container}>
                        <Typography style={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', fontSize: '20px', color: '#597bb5' }}>
                            Edit Info
                        </Typography>
                    </div>
                    <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                    <label style={{ color: '#597bb5', fontWeight: 'bold' }}>First Name: </label>
                        <input type="text" name="firstname" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <label style={{ color: '#597bb5', fontWeight: 'bold' }}>Last Name: </label>
                        <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <label style={{ color: '#597bb5', fontWeight: 'bold' }}>Id: </label>
                        <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <Button variant="contained" color="primary" type="submit">
                            Submit Changes
                        </Button>
                        <br />
                        <br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditStudentView;