import { updateIssue } from "../../../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../../../utils/helper";

if (options.projects && options.issues) {
  const { id: projectId } = options.projects;
  const { state, id } = options.issues;

  const newState = args[0];

  const STATES = ['close', 'reopen'];

  if (state === 'closed' && newState === 'close') {
    notify(`Can't close this issue again.`, 'error', 3000);
  } else if (state === 'opened' && newState === 'reopen') {
    notify(`Can't reopen this issue again.`, 'error', 3000);
  } else if (STATES.indexOf(newState) === -1) {
    notify(`Invalid new state value.`, 'error', 3000);
  } else {
    const response = updateIssue(projectId, id, {
      state_event: newState
    });
    const result = decodeApiResponse(response);

    if (!(result.status >= 200 && result.status <= 299)) {
      handleErrors(
        result.status,
        result.response.message ? result.response.message : result.response.error
      );
    } else {
      notify(`Issue ${newState} `, "success", 3000);
      open(result.response.web_url);
    }
  }
}
