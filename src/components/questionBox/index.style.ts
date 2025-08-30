import { styled } from '@mui/material/styles';

export const QuestionPart = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 15px;
    width: 85%;
    gap: 20px;

    .question-audio-text {
        flex: 8;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        height: 110px;
        gap: 10px;
        flex-wrap: wrap;
    }

    .illustration-box {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: tranparent;
        width: 110px;
        height: 110px;

        img {
            border-radius: 10px;
            width: 125px;
            height: 100px;
        }
    }
`

// border: 1px solid black;