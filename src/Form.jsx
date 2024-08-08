import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Box, InputLabel, FormGroup, Snackbar, Alert } from '@mui/material';

const Form = () => {
    const [formData, setFormData] = useState({
        nome: '',
        tipoDeVisto: '',
        dataDeEntregaDocumentos: '',
        dataDeViagem: '',
        dataDeEntregaDoVisto: ''
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const dataParaEnviar = {
            ...formData,
            dataDeEntregaDoVisto: formData.dataDeEntregaDoVisto || "NÃO ENTREGUE",
        };
        console.log(dataParaEnviar);
        // Enviar dataParaEnviar ao banco de dados

        // Abrir a notificação
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div>
            <Box sx={{ p: 2, maxWidth: '600px', mx: 'auto', color: "white", textAlign: 'center', mb: '40px' }}>
                <h1>Formulário</h1>
                <form onSubmit={handleSubmit} style={{ width: '100%', textAlign: 'center' }}>
                    <FormGroup sx={{ mb: '16px', textAlign: 'left' }}>
                        <InputLabel shrink sx={{ color: 'white', fontSize: '1.5rem', display: 'block' }}>
                            Nome
                        </InputLabel>
                        <TextField
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            sx={{ 
                                backgroundColor: 'white', 
                                borderRadius: '8px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                            }}
                        />
                    </FormGroup>

                    <FormGroup sx={{ mb: '16px', textAlign: 'left' }}>
                        <InputLabel shrink sx={{ color: 'white', fontSize: '1.5rem', display: 'block' }}>
                            Tipo de Visto
                        </InputLabel>
                        <Select
                            name="tipoDeVisto"
                            value={formData.tipoDeVisto}
                            onChange={handleChange}
                            fullWidth
                            sx={{ 
                                backgroundColor: 'white', 
                                borderRadius: '8px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                            }}
                        >
                            <MenuItem value="Estudante">Estudante</MenuItem>
                            <MenuItem value="Trabalho">Trabalho</MenuItem>
                            <MenuItem value="EstadiaTemporaria">Estadia Temporária</MenuItem>
                            <MenuItem value="Residencia">Residência</MenuItem>
                            <MenuItem value="Schengen">Schengen (Curta Duração)</MenuItem>
                            <MenuItem value="Investidor">Investidor (Golden Visa)</MenuItem>
                            <MenuItem value="Pesquisa">Pesquisa ou Altamente Qualificado</MenuItem>
                        </Select>
                    </FormGroup>

                    <FormGroup sx={{ mb: '16px', textAlign: 'left' }}>
                        <InputLabel shrink sx={{ color: 'white', fontSize: '1.5rem', display: 'block' }}>
                            Data de Entrega dos Documentos
                        </InputLabel>
                        <TextField
                            name="dataDeEntregaDocumentos"
                            type="date"
                            value={formData.dataDeEntregaDocumentos}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            sx={{ 
                                backgroundColor: 'white', 
                                borderRadius: '8px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormGroup>

                    <FormGroup sx={{ mb: '16px', textAlign: 'left' }}>
                        <InputLabel shrink sx={{ color: 'white', fontSize: '1.5rem', display: 'block' }}>
                            Data de Viagem
                        </InputLabel>
                        <TextField
                            name="dataDeViagem"
                            type="date"
                            value={formData.dataDeViagem}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            sx={{ 
                                backgroundColor: 'white', 
                                borderRadius: '8px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormGroup>

                    <FormGroup sx={{ mb: '16px', textAlign: 'left' }}>
                        <InputLabel shrink sx={{ color: 'white', fontSize: '1.5rem', display: 'block' }}>
                            Data de Entrega do Visto
                        </InputLabel>
                        <TextField
                            name="dataDeEntregaDoVisto"
                            type="date"
                            value={formData.dataDeEntregaDoVisto}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            sx={{ 
                                backgroundColor: 'white', 
                                borderRadius: '8px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormGroup>

                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        fullWidth   
                        sx={{ 
                            backgroundColor: '#4f43cb', 
                            width: '15em', 
                            marginTop: '2em', 
                            marginBottom: '1em' 
                        }}
                    >
                        Enviar
                    </Button>
                </form>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                >
                    <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                        Dados enviados com sucesso!
                    </Alert>
                </Snackbar>
            </Box>
        </div>
    );
};

export default Form;
