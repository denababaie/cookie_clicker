import create from "zustand";

const getInitialScore = () => 0;
const getInitialUpgrades = () => ({
  1: {
    id: 1,
    cps: 1,
    cost: 10,
    name: "Baker"
  }
});

export const [useCookieStore, store] = create((set, get) => ({
  score: getInitialScore(),
  upgrades: getInitialUpgrades(),
  purchasedUpgrades: [],
  actions: {
    newGame() {
      set({
        score: getInitialScore(),
        upgrades: getInitialUpgrades(),
        purchasedUpgrades: []
      });
    },
    changeScore(amount = 1) {
      set((state) => ({ score: state.score + amount }));
    },
    purchase(upgradeId) {
      const { upgrades, actions } = get();
      const upgrade = upgrades[upgradeId];

      actions.changeScore(-upgrade.cost);
      set((state) => ({
        purchasedUpgrades: [...state.purchasedUpgrades, upgrade]
      }));
    }
  }
}));
