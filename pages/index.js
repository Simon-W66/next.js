import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState} from "react"
import generator from "generate-password"

export default function Home() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [isLowerCase] = useState(true);
  const [isUpperCase] = useState(true);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols] = useState(true);
 
  const generatePassword = () => {
    const pwd = generator.generate({
      length: length,
      lowercase: isLowerCase,
      uppercase: isUpperCase,
      numbers: isNumbers,
      symbols: isSymbols
    });
    setPassword(pwd);
  }
  return (
    <div className={styles.container}>
      <div className="container">
        <div className="row">
          <div className="col">
            <label >
              <span className="lbl-len">Length:</span>
              <input
                type="number"
                className="input-len form-control"
                value={length}
                onChange={e => setLength(e.target.value)}
              />
            </label>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <label className="form-control">
              <input
                type="checkbox"
                className="mr-1"
                checked={isNumbers}
                onChange={() => setIsNumbers(val => !val)}
              />
              <span>Numbers</span>
            </label>
          </div>
          
        </div>
        
        <div className="row">
          <div className="col">
            <input
              type="button"
              className="btn btn-dark mt-2 mb-3"
              value="Generate Password"
              onClick={generatePassword} />
            <div>
              Password: {password}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
