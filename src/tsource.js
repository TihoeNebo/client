﻿const topicsData = {
    forumId: 2,
    forumURN: "firstForum",
    forumName: "Луна",
    page: 1,
    pages: 1,
    topics: [
        {
            topicId: 1,
            linkPath: "/firstForum/1",
            theme: "sacrum",
            comment: "Описание лунных дней",
            sumPosts: 23,
            views: 170,
            author: {
                id: 33,
                name: "Vasya"
            },
            lastPost: {
                id: 23,
                date: "12:30 05-08-21",
                author: {
                    id: 17,
                    name: "Юхао"
                },
            },
            params: {
                essential: true,
                closed: false
            }
        }, {
            topicId: 2,
            linkPath: "/firstForum/1",
            theme: "лунные дома",
            comment: "Описание лунных домов",
            sumPosts: 31,
            views: 220,
            author: {
                id: 37,
                name: "мимо крокодил"
            },
            lastPost: {
                id: 31,
                date: "11:27 05-08-21",
                author: {
                    id: 17,
                    name: "Юхао"
                },
            },
            params: {
                essential: true,
                closed: false
            }
        }, {
            topicId: 3,
            linkPath: "/firstForum/1",
            theme: "Фазы Луны",
            comment: "Описание лунных фаз",
            sumPosts: 4,
            views: 11,
            author: {
                id: 56,
                name: "Cheburator"
            },
            lastPost: {
                id: 4,
                date: "17:11 03-08-21",
                author: {
                    id: 21,
                    name: "Лиля"
                },
            },
            params: {
                essential: true,
                closed: false
            }
        }, {
            topicId: 4,
            linkPath: "/firstForum/1",
            theme: "Лунные узлы",
            comment: "...и другие фиктивные точки",
            sumPosts: 6,
            views: 18,
            author: {
                id: 33,
                name: "Vasya"
            },
            lastPost: {
                id: 23,
                date: "22:54 01-08-21",
                author: {
                    id: 21,
                    name: "Лиля"
                },
            },
            params: {
                essential: true,
                closed: false
            }
        }
    ]
}

export default topicsData;
