import React from "react";
import styled from "styled-components";

import { IconContext } from "react-icons";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaLinux, FaTimesCircle, FaXbox, FaPlaystation, FaWindows, FaApple } from 'react-icons/fa';

const StyledOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9;
`;

const ModalContainer = styled.div`
    max-width: 768px;
    width: 90%;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 16px 24px rgba(0, 0, 0, 0.24), 0 6px 16px rgba(0, 0, 0, 0.12);
`;

const ModalContent = styled.div`
    position: relative;
    background-color: rgba(52, 73, 94, 1);
    border-radius: 0.5rem;
`;

const ModalClose = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    aspect-ratio: 1;
    border-radius: 50%;
    top: -1rem;
    right: -1rem;
    background-color: rgba(236, 240, 241, 1);
    font-size: 2rem;
    cursor: pointer;
`;

const ModalHeader = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0.5rem 1rem;
`;

const StyledRating = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(236, 240, 241);
    aspect-ratio: 1;
    width: 40px;
    border-radius: 50%;
    font-size: 0.937rem;
    font-weight: bold;
    color: rgba(44, 63, 80);
    line-height: 1;
`;

const StyledName = styled.div`
    font-size: 1.296rem;
`;

const StyledMedia = styled.div`
    position: relative;
`;

const StyledImg = styled.img`
    aspect-ratio: 2.35/1;
    width: 100%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
`;

const ModalBody = styled.div`
    padding: 1rem;
    max-height: 160px;
    overflow-y: scroll;
    font-size: 0.937rem;
`;

const ModalPlatforms = styled.ul`
    display: flex;
    gap: 0.75rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    padding: 0.75rem 1rem 0.5rem 1rem;
    background-color: rgba(44, 62, 80, 0.8);
    border-radius: 0.25rem;
`;

const ModalPlatformsItem = styled.li`
    font-size: 2rem;
    line-height: 1;
`;

function Modal ({open, onClose, modalData}) {
    if (!open) return null

    return (
        <StyledOverlay onClick={onClose}>
            <ModalContainer>
                <ModalContent>
                <IconContext.Provider value={{ color: 'rgba(192, 57, 43, 1)', backgroundColor: 'white' }}>
                    <ModalClose onClick={onClose}><FaTimesCircle /></ModalClose>
                    <ModalHeader>
                        <StyledRating>{modalData.rating}</StyledRating>
                        <StyledName>{modalData.name}</StyledName>
                    </ModalHeader>
                    <StyledMedia>
                        <StyledImg src={modalData.background_image} />
                        <ModalPlatforms>
                        {modalData.parent_platforms.map((platform) => {
                            const platformName = platform.platform.slug;
                            const platformIcons = {
                                xbox: <FaXbox />,
                                playstation: <FaPlaystation />,
                                pc: <FaWindows />,
                                macos: <FaApple />,
                                nintendo: <BsNintendoSwitch />,
                                linux: <FaLinux />,
                            };
                            
                            return (
                                <ModalPlatformsItem key={platform.id}>
                                    {platformIcons[platformName]}
                                </ModalPlatformsItem>
                            )
                        })}
                        </ModalPlatforms>
                    </StyledMedia>
                    <ModalBody>
                        {modalData.description_raw}
                    </ModalBody>
                </IconContext.Provider>
                </ModalContent>
            </ModalContainer>
        </StyledOverlay>
    )
}

export default Modal