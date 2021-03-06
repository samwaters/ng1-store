export class HelloActions {
  public static id = 'hello.actions';
  public static actions = {
    UPDATE_GREETING: 'UPDATE_GREETING'
  };

  public updateGreeting(newGreeting:string) {
    return (dispatch) => {
      dispatch({
        type: HelloActions.actions.UPDATE_GREETING,
        payload: newGreeting
      });
    };
  }
}
