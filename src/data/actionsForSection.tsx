import {
    AccountBox, 
    AddCircleOutline, 
    Upgrade, 
    DeleteForever, 
    Search, 
    ListAlt,
    Receipt,
    Paid,
    Assessment,
    Checklist,
    Group
    } from '@mui/icons-material'

export const actionsClientsSection = {
    iconSection: <AccountBox fontSize='large'/>,
    actions: [
        {
            actionName: 'Agregar Cliente',
            iconAction: <AddCircleOutline fontSize='large'/>
        },
        {
            actionName: 'Actualizar Cliente',
            iconAction: <Upgrade fontSize='large'/>
        },
        {
            actionName: 'Buscar Cliente',
            iconAction: <Search fontSize='large'/>
        },
        {
            actionName: 'Eliminar Cliente',
            iconAction: <DeleteForever fontSize='large'/>
        },
    ]
}

export const actionsProductsSection = {
    iconSection: <ListAlt fontSize='large'/>,
    actions: [
        {
            actionName: 'Agregar Producto',
            iconAction: <AddCircleOutline fontSize='large'/>
        },
        {
            actionName: 'Actualizar Producto',
            iconAction: <Upgrade fontSize='large'/>
        },
        {
            actionName: 'Buscar Producto',
            iconAction: <Search fontSize='large'/>
        },
        {
            actionName: 'Eliminar Producto',
            iconAction: <DeleteForever fontSize='large'/>
        },
    ]
}

export const actionsSalesSection = {
    iconSection: <Receipt fontSize='large'/>,
    actions: [
        {
            actionName: 'Crear Venta',
            iconAction: <AddCircleOutline fontSize='large'/>
        },
        {
            actionName: 'Actualizar Venta',
            iconAction: <Upgrade fontSize='large'/>
        },
        {
            actionName: 'Buscar Venta',
            iconAction: <Search fontSize='large'/>
        },
        {
            actionName: 'Eliminar Venta',
            iconAction: <DeleteForever fontSize='large'/>
        },
    ]
}

export const actionsPaymentsSection = {
    iconSection: <Paid fontSize='large'/>,
    actions: [
        {
            actionName: 'Crear Pago',
            iconAction: <AddCircleOutline fontSize='large'/>
        },
        // {
        //     actionName: 'Actualizar Venta',
        //     iconAction: <Upgrade fontSize='large'/>
        // },
        {
            actionName: 'Buscar Pago',
            iconAction: <Search fontSize='large'/>
        },
        {
            actionName: 'Eliminar Pago',
            iconAction: <DeleteForever fontSize='large'/>
        },
    ]
}

export const actionsReportsSection = {
    iconSection: <Assessment fontSize='large'/>,
    actions: [
        {
            actionName: 'Crear Reporte',
            iconAction: <AddCircleOutline fontSize='large'/>
        },
        {
            actionName: 'Actualizar Reporte',
            iconAction: <Upgrade fontSize='large'/>
        },
        {
            actionName: 'Buscar Reporte',
            iconAction: <Search fontSize='large'/>
        },
        {
            actionName: 'Eliminar Reporte',
            iconAction: <DeleteForever fontSize='large'/>
        },
    ]
}

export const actionsOrdersSection = {
    iconSection: <Checklist fontSize='large'/>,
    actions: [
        {
            actionName: 'Crear Orden',
            iconAction: <AddCircleOutline fontSize='large'/>
        },
        {
            actionName: 'Actualizar Orden',
            iconAction: <Upgrade fontSize='large'/>
        },
        {
            actionName: 'Buscar Orden',
            iconAction: <Search fontSize='large'/>
        },
        {
            actionName: 'Eliminar Orden',
            iconAction: <DeleteForever fontSize='large'/>
        },
    ]
}

export const actionsUsersSection = {
    iconSection: <Group fontSize='large'/>,
    actions: [
        {
            actionName: 'Crear Usuario',
            iconAction: <AddCircleOutline fontSize='large'/>
        },
        {
            actionName: 'Actualizar Usuario',
            iconAction: <Upgrade fontSize='large'/>
        },
        {
            actionName: 'Buscar Usuario',
            iconAction: <Search fontSize='large'/>
        },
        {
            actionName: 'Eliminar Usuario',
            iconAction: <DeleteForever fontSize='large'/>
        },
    ]
}