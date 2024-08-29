import {
  SxProps,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";

interface ICheckboxProps {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  checkboxStyle?: SxProps;
  defaultChecked?: boolean;
  icon?: React.ReactElement;
  formControlStyles?: SxProps;
  checkedIcon?: React.ReactElement;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const {
    icon,
    label,
    disabled,
    checked,
    checkedIcon,
    handleChange,
    checkboxStyle,
    defaultChecked,
    formControlStyles,
  } = props;
  return (
    <FormControlLabel
      label={label}
      disabled={disabled}
      sx={{ margin: 0, ...formControlStyles }}
      control={
        <MuiCheckbox
          icon={icon}
          checked={checked}
          onChange={handleChange}
          checkedIcon={checkedIcon}
          defaultChecked={defaultChecked}
          sx={{ padding: 0, ...checkboxStyle }}
        />
      }
    />
  );
};

export default Checkbox;
