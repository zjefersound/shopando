import React from 'react';

import { 
    Container,
    SearchIcon,
    Input,
} from './styles';

interface Props { 
    name?: string;
    id?: string;
    onChange?: Function;
    onSubmit?: Function;
    placeholder?: string;
}

const SearchBar: React.FC<Props> = (props) => {
    return (
        <Container>
            <SearchIcon />
            <Input 
                name = { props.name }
                id = { props.id }
                onChange = { () => props.onChange }
                placeholder = { props.placeholder }
                type='text'
                onSubmit = { () => props.onSubmit }
            />
        </Container>
    );
}

export default SearchBar;