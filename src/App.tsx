import React, { useState } from 'react';
import { genericControler } from './api/generic-api';

const App = () => {

    const [schema, setSchema] = useState({description:''});
    const {getSchema} = genericControler('films');
    getSchema().then(
        valor => setSchema(valor)
    )
    return (
        <div> {schema.description} </div>
    )
}

export default App;