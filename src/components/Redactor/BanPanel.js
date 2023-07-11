import React, {useState} from "react";
import {useDispatch} from "react-redux";

export default function BanPanel({ action }) {
    
    const dispatch = useDispatch();
    const setBanTime = (state) => dispatch(action(state));
    const banTime = new BanTime(setBanTime);
    const [banPeriod, setBanPeriod] = useState(banTime.getPeriodMessage());

    const optionsData = [
        {
            value: 5,
            measure: "minutes",
            title: "минут"
        }, {
            value: 30,
            measure: "minutes",
            title: "минут"
        }, {
            value: 3,
            measure: "hours",
            title: "часа"
        }, {
            value: 12,
            measure: "hours",
            title: "часов"
        }, {
            value: 5,
            measure: "days",
            title: "дней"
        }, {
            value: 30,
            measure: "days",
            title: "дней"
        },
    ];

    const timeHandler = (value, measure) => {
        return () => {
            banTime.setValue(value, measure, setBanTime);
            setBanPeriod(banTime.getPeriodMessage())
        }
    }

    const optionsList = optionsData.map(({ value, measure, title }) => {
        return (
            <>
                <button onClick={timeHandler(-value, measure)}>
                    -
                </button>
                {value}
                <button onClick={timeHandler(value, measure)}>
                    +
                </button>
                {title}.
            </>)
    });

    return (
        <section>
            {optionsList}
            <p>
                {banPeriod}
            </p>
        </section>
    );
}

class BanTime {
    static nowDate = new Date();
    static banTime = new Date(BanTime.nowDate);
    constructor(setBanTime) {
        this.setBanTime = setBanTime;
        this.nowDate = BanTime.nowDate;
        this.banTime = BanTime.banTime;
    }
    

    setValue(value, measure) {
        
        switch (measure) {
            case "minutes":
                this.banTime.setMinutes(this.banTime.getMinutes() + value);
                break;
            case "hours":
                this.banTime.setHours(this.banTime.getHours() + value);
                break;
            case "days":
                this.banTime.setDate(this.banTime.getDate() + value);
                break;
            default:
                return;
        }
        if (this.banTime < this.nowDate) this.banTime.setTime(BanTime.nowDate.getTime());

        this.setBanTime( this.banTime.getTime() - this.nowDate.getTime());
    };

    getPeriodMessage() {

        const getMeasureWord = (value, words) => {

            if (value % 10 === 0 || value % 10 > 4 || value % 100 > 10 && value % 100 < 20) return `${value} ${words[2]} `;
            else if (value % 10 === 1) return `${value} ${words[1]} `;
            else return `${value} ${words[0]} `;
        }

        const banPeriod = new Date(this.banTime.getTime() - this.nowDate.getTime());
        const measureWords = [
            {
                value: banPeriod.getFullYear() - 1970,
                words: ["года", "год", "лет"]
            }, {
                value: banPeriod.getMonth(),
                words: ["месяца", "месяц", "месяцев"]
            }, {
                value: banPeriod.getDate() - 1,
                words: ["дня", "день", "дней"]
            }, {
                value: banPeriod.getUTCHours(),
                words: ["часа", "час", "часов"]
            }, {
                value: banPeriod.getMinutes(),
                words: ["минуты", "минута", "минут"]
            }
        ];

        const periodMessage = measureWords.map(({ value, words }, index) => {
            if (value || index === measureWords.length - 1) return getMeasureWord(value, words);
            return "";
            
        })

        return periodMessage.join("");

    }

}
