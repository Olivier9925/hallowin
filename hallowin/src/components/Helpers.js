export const RandomTab = (tab_) => {
	var i;
	var Num;
	var Nbr = tab_.length;
	var Tab = tab_;

	while (Nbr > 0) {
		Num = Math.floor(Math.random() * Nbr);
		Nbr--;
		var szTmp = Tab[Num];
		for (i = Num; i < Nbr; i++) Tab[i] = Tab[i + 1];
		Tab[Nbr] = szTmp;
	}
	Tab.reverse();
	return Tab;
};

export const randomof = (unit) => Math.floor(Math.random() * unit);

export const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
