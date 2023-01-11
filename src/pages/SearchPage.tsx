import React, {useMemo, useState} from 'react';
import Container from "../components/Container/Container";
import Input from "../components/Control/Input/Input";
import searchIcon from '../assets/img/search.png';
import {Psyhologs} from "../data/psyhologs";


import CardPsyholog from "../components/CardPsyholog/CardPsyholog";
import styles from './SearchPage.module.scss'
import Modal from "../components/Modal/Modal";

const SearchPage = () => {

    const [search, setSearch] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalPsyhologName, setModalPsyhologName] = useState('')

    const filteredPsihologs = useMemo(() => {
        if (!search) return Psyhologs
        if (search) {
            return Psyhologs.filter(psyholog => psyholog.name.toUpperCase().startsWith(search.toUpperCase()))
        }
    }, [search])

    const onClickRecord = (name: string) => {
        setModalPsyhologName(name)
        setModalIsOpen(true)
    }

    return (
        <>
            <Container>
                <div className={styles.searchInputField}>
                    <Input className={styles.searchInput} placeholder={'Поиск'} value={search} onChange={(event) => {
                        setSearch(event.target.value)
                    }}/>
                    <img src={searchIcon} alt="" className={styles.searchIcon}/>
                </div>
                {filteredPsihologs && filteredPsihologs.map((psy) =>
                    <CardPsyholog
                        key={psy.id}
                        id={psy.id}
                        img={psy.img}
                        name={psy.name}
                        subtitle={psy.subtitle}
                        benefits={psy.benefits}
                        onClickBtn={onClickRecord}
                    />
                )}
            </Container>
            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <p>Вы успешно записалиись к психологу {modalPsyhologName}</p>
            </Modal>
        </>
    );
};

export default SearchPage;