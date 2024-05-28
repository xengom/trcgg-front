import React from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Trc.module.css";

const MenuBar = () => {
  return (
    <div className={style.centered}>
      <table>
        <tbody>
          <tr>
            <td>
              <Link to="/">Home</Link>
            </td>
            <td>
              <Link to="/trc">TRC</Link>
            </td>
            <td>
              <Link to="/trcgg">TRC.GG</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MenuBar;