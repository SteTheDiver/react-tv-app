import React, { useState } from "react";
import packageOptions from "../packageOptions";
import programOptions from "../programOptions";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";

function Form(props) {
  const [bundle, setBundle] = useState([]);
  const [program, setProgram] = useState([]);

  return (
    <div className="form">
      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">Package</InputLabel>
        <Select
          style={{ width: "10em" }}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          value={bundle.name}
          onChange={(e) =>
            setBundle(packageOptions.find((b) => b.id == e.target.value))
          }
        >
          {packageOptions.map((b, i) => (
            <MenuItem value={b.id} key={i}>
              {b.name} - $ {b.price}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select your package</FormHelperText>
      </FormControl>
      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">Programs</InputLabel>
        <Select
          style={{ width: "10em" }}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          value={program.name}
          onChange={(e) =>
            setProgram(programOptions.find((p) => p.id == e.target.value))
          }
        >
          {programOptions.map((p, i) => (
            <MenuItem value={p.id} key={i}>
              {p.name} - $ {p.price}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select your programs</FormHelperText>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.onAdd(bundle, program);
          setBundle("");
          setProgram("");
        }}
      >
        <span>Add your selection</span>
      </Button>
    </div>
  );
}

export default Form;
