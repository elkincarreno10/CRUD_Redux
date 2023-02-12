import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types'

// Muestra una alerta
export function mostrarAlerta(alerta) {
    return dispatch => {
        dispatch(crearAlerta(alerta))
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

// ocultar alerta
export function ocultarAlertaAction() {
    return dispacth => {
        dispacth(ocultarAlerta())
    }
}

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})