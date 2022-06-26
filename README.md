You may read their notes:
- [Why Public Chain should optimize grant distribution for "good public goods"](/Why%20Public%20Chain%20should%20optimize%20grant%20d.md)
- [How to distribute grants to "good public goods"](/How%20to%20distribute%20grants%20to%20%22good%20public.md)

[![Image from Gyazo](https://i.gyazo.com/2552c594dcc6bf48f9498498f90ed60f.png)](https://gyazo.com/2552c594dcc6bf48f9498498f90ed60f)

**The Problem:**

Both voting and quadratic funding allow for the possibility of collusion. In governance, when voting for a particular outcome, parties may collude to ensure that a vote goes in their favor. In quadratic funding, the problem may be even more pronounced. A group could create multiple wallets for a sybil attack or collude with others within their social spheres to receive heightened matching funds. Collusion is a concern that must be addressed across protocols and DAOs. 

**Current Solutions:**

To reduce the likelihood of a sybil attack by verifying that each wallet belongs to a separate individual, [Gitcoin Passport](https://passport.gitcoin.co/) allows users to create a decentralized identity record consisting of social credentials such as Twitter, FaceBook (Meta) or ENS. Other protocols, such as open blockchain analytics platform [Breadcrumbs.app](https://www.breadcrumbs.app/) allows for fund tracing, which may also prevent sybil attacks. However, neither addresses the possibility of collusion between individuals. 

To address the often incorrect assumption that funders are inherently uncoordinated, Gitcoin introduced Pairwise Bounding, which “is a way of muting the impact of groups of contributors who contribute to the same grants as each other”. ([Pairwise Bounding - Gitcoin support](https://support.gitcoin.co/gitcoin-policy/policy/fraud-deterrent-mechanisms/pairwise-bounding)) While this may reduce possibilities for collusion, it also may lead to the punishing of positive coordinated behavior; the foundation of grassroots movements

**Our Solution**

Both to reduce the possibility of collusion between individuals who are in small social circles and to improve the possibility of making grants more pluralistic, we propose the use of a Decentralized Cartography Protocol to provide dispersion ratings among wallets (“nodes”). A higher dispersion rating would indicate that the nodes interact with disparate protocols and therefore may have a higher plurality. A lower dispersion rating may suggestion that the nodes are in communication with each other more regularly. 


**Notes**
* So as not to punish positive coordinated behavior
* Using a set of ETH addresses, a Decentralized Cartography Protocol would create a dispersion rating based on the number of interactions between addresses (“nodes”). This would produce clusters based on the commonalities of the interactions, which would be labeled by cartographers. 
* This could be extended to all EVM compatible addresses, including layer 2 protocols, and then later to other chains. 
* The use case is finding out a set of addresses that contributed to a given funding round and it would show the labels for each cluster to see if they fit into these bubbles. It’s a public good that can then be used by any quadratic voting or funding with a matching fund to prevent collusion. It could be used more broadly to promote pluralistic decision making. 
* This applies to any protocol that has a grants program to prevent it from being gamed. 
* The users who go through these addresses to find the protocols that link them together can propose social labels for the clusters in return for tokens. 
* If your DAO wants to more heavily weight votes from dispersed clusters, you could use the labels from the Decentralized Cartography Protocol to provide cluster labels to see how the dispersion rating of the vote, for anything on the EVM chain, such as OpenSea, Decentraland, Uniswap and the Lens Protocol 
* The utility is that when CityDAO has a group of addresses that voted for a specific proposal, 
* The incentive for cartographers to label this could be from the protocol that wants to use it. So if Gitcoin wants to use this, they could provide funding for the cartographers
* One way to query is to include all external addresses and contracts into the search to find the clusters. Another way is to aggregate the contracts so that the nodes are all external contracts. 
* This then pulls up a cluster. The cartographer could go in and look at the shared commonalities, such as all using paraswap, 1inch and wormhole. This cluster may then be labeled “Defi” sub-label “paraswap”. 
