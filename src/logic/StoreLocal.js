class StoreLocal {
  static saveState(state) {
    const formattedState = {
      name: state.name,
      email: state.email,
      phone: state.phone,
      schools: state.schools,
      jobs: state.jobs
    };
    localStorage.setItem('data', JSON.stringify(formattedState));
  }
  static loadState() {
    if (localStorage.getItem('data')) {
      return JSON.parse(localStorage.getItem('data'));
    } else {
      return null;
    }
  }
}
export default StoreLocal;