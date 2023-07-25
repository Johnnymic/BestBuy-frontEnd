import React, { useRef, useState, useEffect } from 'react';
import { FaCheckCircle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePwdChange = (e) => {
    setPwd(e.target.value);
  };

  const handleMatchPwdChange = (e) => {
    setMatchPwd(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validName && validPwd && validMatch) {
      // Handle successful registration here
      setErrMsg('');
      setSuccess(true);
    } else {
      setErrMsg("Invalid Entry");
      setSuccess(false);
    }
  };

  return (
    <> 
     { success ? (

        <section>
        <h1>Success!</h1>
        <p>
            <a href="#">Sign In</a>
        </p>
        </section>

):(
    
<section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
        {errMsg}
      </p>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <label htmlFor="username">
          Username:
          <FaCheckCircle className={validName ? "valid" : "hide"} />
          <FaTimesCircle className={validName || !user ? "hide" : "invalid"} />
        </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          value={user}
          required
          aria-invalid={!validName}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
          onChange={handleUserChange}
        />
        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
          <FaInfoCircle />
          4 to 24 characters.<br />
          Must begin with a letter.<br />
          Letters, numbers, underscores, hyphens allowed.
        </p>

        {/* Password input */}
        <label htmlFor="password">
          Password:
          <FaCheckCircle className={validPwd ? "valid" : "hide"} />
          <FaTimesCircle className={validPwd || !pwd ? "hide" : "invalid"} />
        </label>
        <input
          type="password"
          id="password"
          value={pwd}
          required
          aria-invalid={!validPwd}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
          onChange={handlePwdChange}
        />
        <p id="pwdnote" className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
          <FaInfoCircle />
          8 to 24 characters.<br />
          Must include uppercase and lowercase letters, a number, and a special character.<br />
          Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
        </p>

        {/* Confirm Password input */}
        <label htmlFor="confirm_pwd">
          Confirm Password:
          <FaCheckCircle className={validMatch && matchPwd ? "valid" : "hide"} />
          <FaTimesCircle className={validMatch || !matchPwd ? "hide" : "invalid"} />
        </label>
        <input
          type="password"
          id="confirm_pwd"
          value={matchPwd}
          required
          aria-invalid={!validMatch}
          aria-describedby="confirmPwd"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
          onChange={handleMatchPwdChange}
        />
        <p id="confirmPwd" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
          <FaInfoCircle />
          Must match the first password input field.
        </p>

        <button type="submit" disabled={!validName || !validPwd || !validMatch}>
          Sign Up
        </button>
      </form>
      {success && <p>Registration successful!</p>}
      <p>
        Already registered?<br />
        <span className="line">
          <a href="#">Sign In</a>
        </span>
      </p>
    </section>
    )}
    </>
  )
};

export default Register;
