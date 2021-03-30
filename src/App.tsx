import React, { useState, useEffect } from 'react';
import { genericControler } from './api/generic-api';
import { People } from './api/schemas/people';

const App = () => {
    const [schema, setSchema] = useState<People>();
    const {getById} = genericControler<People>('people');
    useEffect(() => {
        getById(5).then(
            valor => setSchema(valor)
        )
    })
    
    return (
        <div> {schema? `O personagem ${schema.name} é do sexo ${schema.gender}`:null} </div> 
    )  
}

export default App;