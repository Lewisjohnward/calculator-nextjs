'use client'
import styles from './calculator.module.css'
import { useState, useEffect } from 'react'

const Calculator = () => {
    const [result, setResult] = useState("0")
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [selector, setSelector] = useState(0)
    const [operator, setOperator] = useState("")

    const handleNumpad = (num) => {
        let updatedNum
        if (selector == 0) updatedNum = value1 + num.toString()
        else updatedNum = value2 + num.toString()
        setValue1(updatedNum)
    }

    useEffect(() => {
        console.log(value1)
    }, [value1])
    return (
        <div className={styles.container}>

            <div className={styles.display}>
                {result}
            </div>

            <div className={styles.row}>
                <div className={styles.numpad}>
                    AC
                </div>
                <div className={styles.numpad}>
                    +/-
                </div>
                <div className={styles.numpad}>
                    %
                </div>
                <div className={styles.numpad, styles.rightcolumn}>
                    /
                </div>
            </div>

            <div className={styles.row}>
                <div 
                    className={styles.numpad}
                    onClick={() => handleNumpad(5)}
                >
                    7
                </div>
                <div className={styles.numpad}>
                    8
                </div>
                <div className={styles.numpad}>
                    9
                </div>
                <div className={styles.numpad, styles.rightcolumn}>
                    x
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.numpad}>
                    4
                </div>
                <div className={styles.numpad}>
                    5
                </div>
                <div className={styles.numpad}>
                    6
                </div>
                <div className={styles.numpad, styles.rightcolumn}>
                    -
                </div>
            </div>
                <div className={styles.row}>
                    <div className={styles.numpad}>
                        1
                    </div>
                    <div className={styles.numpad}>
                        2
                    </div>
                    <div className={styles.numpad}>
                        3
                    </div>
                    <div className={styles.numpad, styles.rightcolumn}>
                        +
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.numpad}>
                        0
                    </div>
                    <div className={styles.numpad}>
                        0
                    </div>
                    <div className={styles.numpad}>
                        .
                    </div>
                    <div className={styles.numpad, styles.rightcolumn}>
                        +
                    </div>
                </div>
        </div>
    )
}

export default Calculator
