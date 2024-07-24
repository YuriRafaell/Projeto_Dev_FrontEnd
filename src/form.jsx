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
            <Box sx={{ p: 2, maxWidth: '600px', mx: 'auto' }}>
                <h1>Formulário</h1>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="tipo-de-visto-label">Tipo de Visto</InputLabel>
                        <Select
                            labelId="tipo-de-visto-label"
                            name="tipoDeVisto"
                            value={formData.tipoDeVisto}
                            onChange={handleChange}
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
                        >
                            <MenuItem value="NÃO ENTREGUE">NÃO ENTREGUE</MenuItem>
                            <MenuItem value={formData.dataDeEntregaDoVisto}>
                                {formData.dataDeEntregaDoVisto ? formData.dataDeEntregaDoVisto : "Selecionar data"}
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Enviar
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default Form;
