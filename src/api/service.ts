import ActionStatus from '@/types/ActionStatus';

enum requestTypes {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

interface Request {
  url: string;
  showSuccess: boolean;
  showError: boolean;
  errorMessage: string | null;
  successMessage: string | null;
  body: string | null;
  requestType: requestTypes;
}

const processRequest = async (context: any, payload: Request): Promise<Response> => {
  context.dispatch('ActionMessageModule/updateActionStatus', ActionStatus.InProgress, { root: true });
  let response = new Response();
  try {
    response = await (await fetch(payload.url, {
      method: payload.requestType.toString(),
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload.body,
    }));
    if (response.status === 200) {
      context.dispatch('ActionMessageModule/updateActionStatus', ActionStatus.Success, { root: true });
      if (payload.successMessage) {
        context.dispatch('ActionMessageModule/updateActionMessage', payload.successMessage, { root: true });
      }
      if (payload.showSuccess) {
        context.dispatch('ActionMessageModule/updateActionResultDisplay', true, { root: true });
      }
    } else {
      context.dispatch('ActionMessageModule/updateActionStatus', ActionStatus.Error, { root: true });
      if (payload.errorMessage) {
        context.dispatch('ActionMessageModule/updateActionMessage', payload.errorMessage, { root: true });
      }
      if (payload.showError) {
        context.dispatch('ActionMessageModule/updateActionResultDisplay', true, { root: true });
      }
    }
  } catch (ex) {
    context.dispatch('ActionMessageModule/updateActionStatus', ActionStatus.Error, { root: true });
    if (payload.errorMessage) {
      context.dispatch('ActionMessageModule/updateActionMessage', payload.errorMessage, { root: true });
    }
    if (payload.showError) {
      context.dispatch('ActionMessageModule/updateActionResultDisplay', true, { root: true });
    }
  }
  return response;
};
// PUT
// DELETE
export { processRequest, Request, requestTypes };
