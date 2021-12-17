const parts = [
    {
        partId: 2,
        partName: "First",
        forums: [
            {
                urn: "firstForum",
                name: "Луна",
                topicsCount: 12,
                postsCount: 44,
                lastPost: {
                    id: 12,
                    date: "12:30 05-08-21",
                    linkPath: `/firstForum/23#$12`,
                    author: {
                        id: 33,
                        name: "Vasya"
                    },
                    topic: {
                        id: 23,
                        theme: "sacrum",
                        comment: ""
                    }
                }
            },
            {
                urn: "secondForum",
                name: "Солнце",
                topicsCount: 8,
                postsCount: 163,
                lastPost: {
                    id: 58,
                    date: "12:30 11-09-21",
                    linkPath: `/firstForum/23#$12`,
                    author: {
                        id: 21,
                        name: "Лиля"
                    },
                    topic: {
                        id: 3,
                        theme: "Равноденствие",
                        comment: ""
                    }
                }
            }
        ]
    },
    {
        partId: 3,
        partName: "Принципы ритуальной магии",
        forums: [
            {
                urn: "circle",
                name: "Магический круг",
                topicsCount: 7,
                postsCount: 80,
                lastPost: {
                    id: 13,
                    date: "12:30 03-10-21",
                    linkPath: `/firstForum/23#$12`,
                    author: {
                        id: 56,
                        name: "Cheburator"
                    },
                    topic: {
                        id: 4,
                        theme: "подходящее время для начертания круга призыва",
                        comment: ""
                    }
                }
            },
            {
                urn: "symbols",
                name: "Печати духов",
                topicsCount: 37,
                postsCount: 41,
                lastPost: {
                    id: 7,
                    date: "12:30 08-05-21",
                    linkPath: `/firstForum/23#$12`,
                    author: {
                        id: 37,
                        name: "мимо крокодил"
                    },
                    topic: {
                        id: 27,
                        theme: "Печать духа Юпитера",
                        comment: ""
                    }
                }
            },
            {
                urn: "spells",
                name: "Заклинания",
                topicsCount: 18,
                postsCount: 70,
                lastPost: {
                    id: 25,
                    date: "19:41 08-05-21",
                    linkPath: `/firstForum/23#$12`,
                    author: {
                        Id: 17,
                        name: "Юхао"
                    },
                    topic: {
                        id: 11,
                        theme: "На каком языке это написано?",
                        comment: ""
                    }
                }
            }
        ]
    }
]

export default parts;