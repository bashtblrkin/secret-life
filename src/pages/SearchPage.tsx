import React, {useMemo, useState} from 'react';
import Container from "../components/Container/Container";
import Input from "../components/Control/Input/Input";
import searchIcon from '../assets/img/search.png';
import {Psyhologs} from "../data/psyhologs";


import CardPsyholog from "../components/CardPsyholog/CardPsyholog";
import styles from './SearchPage.module.scss'

const SearchPage = () => {

    const [search, setSearch] = useState('')

    const filteredPsihologs = useMemo(() => {
        if (!search) return Psyhologs
        if (search) {
            return Psyhologs.filter(psyholog => psyholog.name.toUpperCase().startsWith(search.toUpperCase()))
        }
    }, [search])

    return (
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
                />
            )}
        </Container>
    );
};

export default SearchPage;