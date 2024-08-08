import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, Button } from '@mui/material';
import { differenceInDays, parseISO, isValid } from 'date-fns';
import tableCellClasses from '@mui/material/TableCell';
import { useNavigate } from 'react-router-dom';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

function Visto() {
    const [dados, setDados] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const navigate = useNavigate(); // Hook para navegação

    useEffect(() => {
        //MÉTODO GET
        fetch("http://localhost:3000/Contas")
            .then(resp => resp.json())
            .then(data => {
                setDados(data);
                setFilteredData(data);
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filtered = dados.filter(item =>
                item.Nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.Tipo_de_visto.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(dados);
        }
    }, [searchTerm, dados]);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            textAlign: 'center',
            fontSize: '0.75rem',
            padding: '6px',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: '0.75rem',
            textAlign: 'center',
            padding: '6px',
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const convertDateToISO = (dateStr) => {
        const [day, month, year] = dateStr.split('/');
        return `${year}-${month}-${day}`;
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setFilteredData(dados);
    };

    const handleAddButtonClick = () => {
        navigate('/Form');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                color: 'white',
                textAlign: 'center',
                padding: '10px',
                boxSizing: 'border-box',
                mt: '-80px',
                mb: '-50px',
                overflow: 'hidden',
            }}
        >
            <Box sx={{ marginBottom: '20px',margintop: '-10px',  marginLeft: '230px', display: 'flex', gap: 1 }}>
                <TextField
                    variant="outlined"
                    label="Buscar"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '5px',
                        width: '150px',
                        fontSize: '0.75rem',
                        justifyContent: 'flex-end',
                    }}
                    inputProps={{ style: { fontSize: '0.75rem' } }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClearSearch}
                    sx={{
                        backgroundColor: '#4f43cb',
                        fontSize: '0.75rem',
                    }}
                >
                    Limpar
                </Button>

                <Box sx={{ flexGrow: 1 }} />
                <PersonAddAlt1Icon
                    onClick={handleAddButtonClick}
                    sx={{
                        color: 'white',
                        ml: 20,
                        fontSize: 40, // Aumenta o tamanho do ícone
                        cursor: 'pointer',
                        '&:hover': {
                            color: '#3b30a7', // Muda a cor ao passar o mouse
                        },
                    }}
                />
            </Box>

            <TableContainer
                component={Paper}
                sx={{
                    maxWidth: '1000px',
                    width: '100%',
                    border: '10px solid #fff',
                    overflow: 'hidden',
                    mb: 4, // Adiciona uma margem inferior para separar a tabela do componente Contato
                }}
            >
                <Table sx={{ minWidth: 600, borderCollapse: 'collapse' }} aria-label="customized table">
                    <TableHead >
                        <TableRow >
                            <StyledTableCell sx={{ backgroundColor: '#4f43cb', color: 'white', textAlign: 'center' }}>Nome</StyledTableCell>
                            <StyledTableCell sx={{ backgroundColor: '#4f43cb', color: 'white', textAlign: 'center' }}>Tipo de visto</StyledTableCell>
                            <StyledTableCell sx={{ backgroundColor: '#4f43cb', color: 'white', textAlign: 'center' }}>Data de entrega documentos</StyledTableCell>
                            <StyledTableCell sx={{ backgroundColor: '#4f43cb', color: 'white', textAlign: 'center' }}>Data de viagem</StyledTableCell>
                            <StyledTableCell sx={{ backgroundColor: '#4f43cb', color: 'white', textAlign: 'center' }}>Data de entrega do visto</StyledTableCell>
                            <StyledTableCell sx={{ backgroundColor: '#4f43cb', color: 'white', textAlign: 'center' }}>Dias corridos de espera</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((o) => {
                            const isoAnalysisDateStr = convertDateToISO(o.Data_de_entrega_documentos);
                            const isoDeliveryDateStr = convertDateToISO(o.Data_de_entrega_do_visto);

                            const analysisDate = parseISO(isoAnalysisDateStr);
                            const deliveryDate = parseISO(isoDeliveryDateStr);
                            const currentDate = new Date();

                            const daysDifference = isValid(analysisDate)
                                ? isValid(deliveryDate)
                                    ? differenceInDays(deliveryDate, analysisDate)
                                    : differenceInDays(currentDate, analysisDate)
                                : "Data de entrega de documentos inválida";

                            return (
                                <StyledTableRow key={o.Nome}>
                                    <StyledTableCell style={{ textAlign: 'center' }}>{o.Nome}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'center' }}>{o.Tipo_de_visto}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'center' }}>{o.Data_de_entrega_documentos}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'center' }}>{o.Data_de_Viagem}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'center' }}>{o.Data_de_entrega_do_visto}</StyledTableCell>
                                    <StyledTableCell style={{ textAlign: 'center' }}>{daysDifference}</StyledTableCell>
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Visto;
