import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Box, FormControl, InputLabel } from '@mui/material';

const Form = () => {
    const [formData, setFormData] = useState({
        nome: '',
        tipoDeVisto: '',
        dataDeEntregaDocumentos: '',
        dataDeViagem: '',
        dataDeEntregaDoVisto: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <Box sx={{ p: 2, maxWidth: '600px', mx: 'auto', color: "white", alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',  mb: '40px', }}>
                <h1 >Formulário</h1>
                <form onSubmit={handleSubmit} style={{ width: '100%', textAlign: 'center' }}>
                    <TextField
                        fullWidth
                        label="Nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        margin="normal"
                        sx={{ backgroundColor: 'white' }}
                       
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="tipo-de-visto-label">Tipo de Visto</InputLabel>
                        <Select
                            labelId="tipo-de-visto-label"
                            name="tipoDeVisto"
                            value={formData.tipoDeVisto}
                            onChange={handleChange}
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value="Estudante">Estudante</MenuItem>
                            <MenuItem value="Turismo">Turismo</MenuItem>
                            <MenuItem value="Trabalho">Trabalho</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Data de Entrega dos Documentos"
                        name="dataDeEntregaDocumentos"
                        type="date"
                        value={formData.dataDeEntregaDocumentos}
                        onChange={handleChange}
                        margin="normal"
                        sx={{ backgroundColor: 'white' }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Data de Viagem"
                        name="dataDeViagem"
                        type="date"
                        value={formData.dataDeViagem}
                        onChange={handleChange}
                        margin="normal"
                        sx={{ backgroundColor: 'white' }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="data-de-entrega-do-visto-label">Data de Entrega do Visto</InputLabel>
                        <Select
                            labelId="data-de-entrega-do-visto-label"
                            name="dataDeEntregaDoVisto"
                            value={formData.dataDeEntregaDoVisto}
                            onChange={handleChange}
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value="NÃO ENTREGUE">NÃO ENTREGUE</MenuItem>
                            <MenuItem value={formData.dataDeEntregaDoVisto}>
                                {formData.dataDeEntregaDoVisto ? formData.dataDeEntregaDoVisto : "Selecionar data"}
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" fullWidth   sx={{ backgroundColor: ' #4f43cb' }}>
                        Enviar
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default Form;
