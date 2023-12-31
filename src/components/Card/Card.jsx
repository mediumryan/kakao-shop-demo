import styled from 'styled-components';
import CardDescriptions from './CardDescriptions';
import CardImg from './CardImg';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CardWrapper = styled(motion.div)`
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    border-left: 0.5px solid var(--accent-300);
    border-right: 0.5px solid var(--accent-300);
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

export default function Card({ item }) {
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
            </CardWrapper>
        </AnimatePresence>
    );
}
