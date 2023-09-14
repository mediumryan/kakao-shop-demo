import styled from 'styled-components';
import CardDescriptions from './CardDescriptions';
import CardImg from './CardImg';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CardWrapper = styled(motion.div)`
    position: relative;
    margin: var(--margin-small);
    margin-bottom: var(--margin-medium-large);
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
`;

const CardIndex = styled.span`
    position: absolute;
    top: 2%;
    left: 2%;
    color: var(--primary-200);
    cursor: default;
`;

const cardVariants = {
    initial: {
        scale: 1,
        y: 0,
    },
    hover: {
        scale: 1.05,
        y: -20,
        transition: {
            type: 'tween',
            duration: 0.5,
            delay: 0.3,
        },
    },
};

export default function Card({ item, index }) {
    const navigate = useNavigate();

    return (
        <AnimatePresence>
            <CardWrapper
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                onClick={() => {
                    navigate(`/detail/${item.name}`);
                }}
            >
                <CardImg item={item} />
                <CardDescriptions item={item} />
                <CardIndex>{index + 1}</CardIndex>
            </CardWrapper>
        </AnimatePresence>
    );
}
