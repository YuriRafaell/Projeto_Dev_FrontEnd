import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { differenceInDays, parseISO, isValid, format } from 'date-fns';
import MenuComponent from './Navbar';

function Visto() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/Contas")
            .then(resp => resp.json())
            .then(data => {
                setDados(data);
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            textAlign: 'center', // Centraliza o texto no cabeçalho
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            textAlign: 'center', // Centraliza o texto no corpo da tabela
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

    return (
        <div >
            <MenuComponent />
            <h1>Obtendo o visto</h1>
            <TableContainer component={Paper} style={{ maxWidth: '1200px', width: '100%', display: 'flex', justifyContent: 'center', padding: '20px', margin: '0 20px' }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>Tipo de visto</StyledTableCell>
                            <StyledTableCell>Data de entrega documentos</StyledTableCell>
                            <StyledTableCell>Data de viagem</StyledTableCell>
                            <StyledTableCell>Data de entrega do visto</StyledTableCell>
                            <StyledTableCell>Dias corridos de espera</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dados.map((o) => {
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
                                    <StyledTableCell>{o.Nome}</StyledTableCell>
                                    <StyledTableCell>{o.Tipo_de_visto}</StyledTableCell>
                                    <StyledTableCell>{o.Data_de_entrega_documentos}</StyledTableCell>
                                    <StyledTableCell>{o.Data_de_Viagem}</StyledTableCell>
                                    <StyledTableCell>{o.Data_de_entrega_do_visto}</StyledTableCell>
                                    <StyledTableCell>{daysDifference}</StyledTableCell>
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Visto;