/** @format */

export const route = (path, component, layout, name) => {
    if (!path || !component) throw new Error('Path and component are required')
    return {
        path: path,
        component: component,
        meta: {
            layout: layout
        },
        name: name ?? undefined
    }
}
