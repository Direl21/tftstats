import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import consoleTool from '../../../../utils/Tools/Console';

const SelectComponent = (props) => {
    const [urlOptions, setUrlOptions] = useState([]);

    useEffect(() => {
        setUrlOptions([
            { value: 'eune', label: 'EUNE' },
            { value: 'euw', label: 'EUW' },
            { value: 'br', label: 'BR' },
            { value: 'jp', label: 'JP' },
            { value: 'kr', label: 'KR' },
            { value: 'lan', label: 'LAN' },
            { value: 'las', label: 'LAS' },
            { value: 'na', label: 'NA' },
            { value: 'oce', label: 'OCE' },
            { value: 'tr', label: 'TR' },
            { value: 'ru', label: 'RU' },
        ]);
    }, []);


    let onUrlSelect = (e) => {
        consoleTool(("Selected: ", e));
        consoleTool(e);
        props.updateServerName(e);
    };
    
    return (
        <Select
            defaultValue={{ value: 'eune', label: 'EUNE' }}
            options={urlOptions}
            onChange={onUrlSelect}
        />
  );
}

export default SelectComponent;