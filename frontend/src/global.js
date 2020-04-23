import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
};

.logon-container {
  background: ${({ theme }) => theme.logon};
};

.back-link {
  color: ${({ theme }) => theme.backLink};
};

.register-container .content {
  background: ${({ theme }) => theme.content};
};

.profile-container ul li {
  background: ${({ theme }) => theme.case}
};

.profile-container ul li strong {
  color: ${({ theme }) => theme.caseStrong};
};

.profile-container ul li p {
  color: ${({ theme }) => theme.caseP};
};

.new-incident-container .content {
  background: ${({ theme }) => theme.contentIncident}

}`;
