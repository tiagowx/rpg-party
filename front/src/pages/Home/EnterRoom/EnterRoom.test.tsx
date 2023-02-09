import { render, screen } from "@testing-library/react";
import EnterRoom from ".";

describe("Tests to enter room component.", () => {  
  test("It should show title.", () => {
    render(<EnterRoom />);
    const title = screen.getByText(/Entrar na Sala/i);
    expect(title).toBeInTheDocument();
  });
  
  test("It should show name box.", () => {
    render(<EnterRoom />);
    const code = screen.getByRole("code-box")
    expect(code).toBeInTheDocument();
  });
  
  test("It should show password box.", () => {
    render(<EnterRoom />);
    const pass = screen.getByRole("pass-box")
    expect(pass).toBeInTheDocument();
  });
  
  test("It should show visualise button from password.", () => {
    render(<EnterRoom />);
    const showPassBtn = screen.getByRole("show-pass-btn")
    expect(showPassBtn).toBeInTheDocument();
  });
  
  test("It should show create button.", () => {
    render(<EnterRoom />);
    const enterBtn = screen.getByRole("enter-btn")
    expect(enterBtn).toBeInTheDocument();

  });
});
