import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Movie from "../components/Movie";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Movie">
                <Movie/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews