/** @format */

export const route = (path, component, name, layout) => {
    if (!path || !component || !name) throw new Error('Path, component and name are required')
    return {
        path: path,
        component: component,
        name: name,
        meta: {
            layout: layout
        }
    }
}
