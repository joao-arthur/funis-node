export default {
    title: 'funis',
    base: '/funis/',
    description: 'Optionated type-safe utility library',
    themeConfig: {
        sidebar: [
            {
                text: 'arrays',
                collapsible: true,
                items: [
                    { text: 'first', link: '/arrays/first' },
                    { text: 'last', link: '/arrays/last' },
                    { text: 'sort', link: '/arrays/sort' },
                    { text: 'unique', link: '/arrays/unique' },
                    { text: 'once', link: '/arrays/once' },
                    { text: 'disjoint', link: '/arrays/disjoint' },
                    { text: 'intersect', link: '/arrays/intersect' },
                    { text: 'groupToEntries', link: '/arrays/group-to-entries' },
                    { text: 'groupToArray', link: '/arrays/group-to-array' },
                    { text: 'groupToMap', link: '/arrays/group-to-map' },
                    { text: 'groupToObject', link: '/arrays/group-to-object' },
                    { text: 'combinations', link: '/arrays/combinations' },
                    { text: 'random', link: '/arrays/random' },
                ]
            },
            {
                text: 'maps',
                collapsible: true,
                items: [
                    { text: 'mapEntries', link: '/maps/map-entries' },
                    { text: 'mapKeys', link: '/maps/map-keys' },
                    { text: 'mapValues', link: '/maps/map-values' },
                    { text: 'first', link: '/maps/first' },
                    { text: 'last', link: '/maps/last' },
                    { text: 'entries', link: '/maps/entries' },
                    { text: 'keys', link: '/maps/keys' },
                    { text: 'values', link: '/maps/values' },
                    { text: 'fromObject', link: '/maps/from-object' },
                ]
            },
            {
                text: 'numbers',
                collapsible: true,
                items: [
                    { text: 'clamp', link: '/numbers/clamp' },
                    { text: 'parse', link: '/numbers/parse' },
                    { text: 'range', link: '/numbers/range' },
                    { text: 'lazyRange', link: '/numbers/lazy-range' },
                    { text: 'isValid', link: '/numbers/is-valid' },
                    { text: 'random', link: '/numbers/random' },
                    { text: 'compareAsc', link: '/numbers/compare-asc' },
                    { text: 'compareDesc', link: '/numbers/compare-desc' },
                ]
            },
            {
                text: 'objects',
                collapsible: true,
                items: [
                    { text: 'mapEntries', link: '/objects/map-entries' },
                    { text: 'mapKeys', link: '/objects/map-keys' },
                    { text: 'mapValues', link: '/objects/map-values' },
                    { text: 'serialize', link: '/objects/serialize' },
                    { text: 'serializesToSame', link: '/objects/serializes-to-same' },
                    { text: 'fromMap', link: '/objects/from-map' },
                    { text: 'pick', link: '/objects/pick' },
                    { text: 'omit', link: '/objects/omit' },
                    { text: 'disjoint', link: '/objects/disjoint' },
                    { text: 'intersect', link: '/objects/intersect' },
                ]
            },
            {
                text: 'promises',
                collapsible: true,
                items: [
                    { text: 'last', link: '/promises/last' },
                    { text: 'resolveTimeout', link: '/promises/resolve-timeout' },
                    { text: 'rejectTimeout', link: '/promises/reject-timeout' },
                    { text: 'objectify', link: '/promises/objectify' },
                    { text: 'retry', link: '/promises/retry' },
                ]
            },
            {
                text: 'standard',
                collapsible: true,
                items: [
                    { text: 'compose', link: '/standard/compose' },
                    { text: 'pipe', link: '/standard/pipe' },
                    { text: 'self', link: '/standard/self' },
                    { text: 'debounce', link: '/standard/debounce' },
                    { text: 'throttle', link: '/standard/throttle' },
                ]
            },
            {
                text: 'strings',
                collapsible: true,
                items: [
                    { text: 'camelCase', link: '/strings/camel-case' },
                    { text: 'pascalCase', link: '/strings/pascal-case' },
                    { text: 'kebabCase', link: '/strings/kebab-case' },
                    { text: 'snakeCase', link: '/strings/snake-case' },
                    { text: 'replaceAccentuation', link: '/strings/replace-accentuation' },
                    { text: 'removeAccentuation', link: '/strings/remove-accentuation' },
                    { text: 'isValid', link: '/strings/is-valid' },
                    { text: 'random', link: '/strings/random' },
                    { text: 'compareAsc', link: '/strings/compare-asc' },
                    { text: 'compareDesc', link: '/strings/compare-desc' },
                ]
            },
            {
                text: 'types',
                collapsible: true,
                items: [
                    { text: 'plainObject', link: '/types/plain-object' },
                ]
            },
        ]
    }
};
