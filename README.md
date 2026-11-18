# POWER IN THE NUMBERS (PITN)

## Persistent Identity and Blockchain/Web3 Namespace Infrastructure for Robotics and Manufacturing

**Author:** Aaron Bailot  
**ORCID:** [0009-0006-2810-6829](https://orcid.org/0009-0006-2810-6829)  
**Organization:** POWER IN THE NUMBERS (PITN)  
**Repository status:** Public framework, architecture, and research documentation  
**Architecture:** PITN umbrella + six complementary initiatives

**Core principle: CONNECT THE PHYSICAL COMPONENT TO THE INFORMATION THAT ALREADY DESCRIBES IT.**

POWER IN THE NUMBERS (PITN) establishes a shared persistent-identity and blockchain/Web3 namespace infrastructure intended to connect physical components, products, assemblies, robots, and lifecycle events to the information that already describes them.

PITN addresses a recurring problem in robotics and manufacturing: the same physical component can be represented by different identifiers and records across manufacturers, suppliers, OEMs, engineering teams, ERP, PLM, MES, CAD, PDM, quality, inventory, maintenance, and service systems. Those records may describe related aspects of the same product or physical instance without providing a consistent way to connect them.

PITN's purpose is to provide an identity, namespace, classification, relationship, provenance, and traceability foundation across those information environments. It is designed to complement existing systems of record—not replace them.

---

## 1. THE SEVEN-INITIATIVE ARCHITECTURE

PITN is the umbrella identity and infrastructure foundation supporting six complementary initiatives. Together, these form the seven-initiative architecture; the initiatives are not seven unrelated products.

| Initiative | Architectural responsibility |
|---|---|
| **POWER IN THE NUMBERS (PITN)** | Shared persistent identity, blockchain/Web3 namespace architecture, classification, identity relationships, provenance, and lifecycle traceability foundation. |
| **ROBOPARTS.ai** | Robotics component and product identity; manufacturer part numbers (MPNs), SKUs, component information, bills of materials (BOMs), sourcing references, compatibility information, and lifecycle relationships. |
| **ROBOTRONIC.ai** | Robotics engineering and systems integration, interoperability, configuration, and integration concepts, including ROS 2-oriented and simulation-first approaches. |
| **ROBOTRAITS.ai** | Structured robot characteristics, physical configuration, declared and assessed capabilities, behavioral characteristics, and performance profiles. |
| **ROBOAGENTIC.ai** | Agent identity, capability discovery, authorization, orchestration, governance, revocation, and execution provenance. |
| **ROBOASI.ai** | AI and knowledge infrastructure for technical information interpretation, semantic processing, information extraction, classification, and discovery. |
| **ROBORECYCLE.ai** | Component and asset recovery, inspection, refurbishment, repair, reuse, secondary lifecycle processing, and end-of-life traceability. |

The intended architectural sequence is:

**Physical Components → Digital Identity → Capabilities → Robots → Intelligence → Tasks → Applications**

The shared identity foundation allows the initiatives to exchange structured references while retaining their distinct responsibilities. The existence of an architectural relationship does not, by itself, mean every integration or service is deployed.

## 2. THE IDENTITY AND INFORMATION PROBLEM

A physical component may be referenced through several identifiers during its lifecycle, including:

- Manufacturer name and manufacturer part number (MPN).
- Distributor stock keeping unit (SKU).
- Product model and revision.
- ERP material number.
- PLM, CAD, or PDM object reference.
- Engineering or manufacturing BOM position.
- Lot and serial number.
- Supplier, OEM, or customer asset identifier.
- Installation, inspection, maintenance, repair, and replacement records.

These identifiers are not interchangeable. A product model identifies a product definition; a serial number or other qualified identifier may identify an individual physical unit; a BOM position identifies a place in a product or assembly definition. PITN's identity model is intended to preserve these distinctions and connect the associated records with their issuing source and context.

The architecture is intended to support:

- Persistent digital references for products, physical instances, robots, and other entities.
- Namespace-based classification and identity organization.
- Relationships among manufacturers, products, components, assemblies, BOM positions, and robots.
- Preservation of original identifiers and source-system authority.
- Provenance and references to supporting documentation or evidence.
- Lifecycle history, including installation, inspection, maintenance, replacement, recovery, and retirement.
- Resolution of known, ambiguous, conflicting, or unverified identity references without silently treating uncertain matches as facts.

PITN does not make an unsupported source record authoritative, prove a physical object's authenticity, certify a component, or establish technical compatibility merely by assigning or registering a digital identity.

## 3. BLOCKCHAIN/WEB3 NAMESPACE ARCHITECTURE

Blockchain/Web3 namespaces are a foundational part of the PITN architecture. They provide a namespace layer for organizing and referencing identity and classification domains across the robotics and manufacturing ecosystem.

The architecture includes robotics-oriented component and system categories such as actuators, reducers, fasteners, encoders, sensors, controllers, batteries, vision modules, end effectors, robotic hands, robotic legs, and complete robot systems.

### Namespace-count consistency

The current PITN architecture is described by the project as a **34-namespace architecture**. An earlier document in this repository, `PITN.txt`, describes a **proposed 27-namespace taxonomy**. These are different document versions/counts and are not to be added together.

The repository's legacy 27-entry taxonomy has not yet been reconciled item-by-item against the current 34-namespace architecture. Accordingly, this README uses 34 as the current project-level architecture designation while identifying the 27-entry taxonomy as legacy documentation pending a definitive crosswalk. It does not claim that the 27 are necessarily a subset of the 34, or that all 34 namespace registrations are active, deployed, or controlled by PITN.

Namespace registration, ownership, registrar arrangements, pricing, availability, operational status, and applicable rights must be verified against the relevant registry and contractual records before a specific namespace is represented as registered, active, or controlled by a particular party.

A namespace establishes an identity or classification context. It does not by itself verify the physical component, its manufacturer, its provenance, its certification, or its compatibility.

## 4. THE ROBOPARTS.ai COMPONENT IDENTITY MODEL

ROBOPARTS.ai applies the PITN identity foundation to robotics components and manufacturing information.

The conceptual model distinguishes:

1. **Namespace and classification** — the category or identity context.
2. **Manufacturer and organization** — the entity issuing or supplying product information.
3. **Product identity** — the manufacturer's defined product or model, including applicable part number and revision.
4. **Physical-instance identity** — the individual manufactured component, where uniquely identifiable.
5. **Assembly and BOM relationship** — the product-definition position and, separately, the physical installation relationship.
6. **Robot identity and configuration** — the machine and its applicable configuration.
7. **Lifecycle events and evidence** — recorded events, source references, and supporting information.

For example, a robot asset, an actuator product model, an individual actuator instance, and the manufacturer's serial number are separate identifiers. The data model connects them without treating them as equivalent.

ROBOPARTS.ai is the component-information and lifecycle application of the PITN framework. The repository documents the architecture and its intended data relationships. Publicly visible pilot or demonstration material should be understood according to its stated status; a demonstration is not evidence that every proposed API, registry, integration, or verification mechanism is in production.

## 5. RELATIONSHIP TO EXISTING MANUFACTURING SYSTEMS

PITN is intended to work alongside existing systems, including:

- Enterprise Resource Planning (ERP).
- Product Lifecycle Management (PLM).
- Manufacturing Execution Systems (MES).
- Computer-Aided Design (CAD) and Product Data Management (PDM).
- Quality Management Systems (QMS).
- Inventory, warehouse, procurement, and supplier systems.
- Maintenance, service, and asset-management platforms.
- Robotics software, fleet-management, and digital-twin environments.

The intended relationship is an identity and information-connection layer: existing systems continue to manage the records and processes for which they are authoritative, while PITN provides persistent references and relationships across those environments. Any live connection requires a defined integration, access permissions, data contracts, and validation.

## 6. ARCHITECTURE, PROTOTYPE, PILOT, AND PRODUCTION STATUS

The repository contains framework descriptions, technical architecture, illustrative data models, economic scenarios, and application-related source files. These materials have different evidence and implementation statuses and should not be conflated.

| Area | What this repository supports | What is not established by this README or repository documentation alone |
|---|---|---|
| PITN framework | Documented identity, namespace, relationship, provenance, and traceability architecture. | That every described capability is deployed as a production service. |
| Blockchain/Web3 namespaces | A project-level 34-namespace architecture designation and related namespace concepts. | That every namespace is registered, active, available, or independently verified. |
| ROBOPARTS.ai | Component identity and lifecycle architecture, with associated pilot and demonstration materials. | That every manufacturer, supplier, ERP/PLM/MES, or external registry integration is live and validated. |
| Digital passports and scanning | Publicly referenced demonstration pages and documented passport concepts. | Live blockchain verification or production-grade physical authentication. The Factory01 passport demonstration has been described as a demonstration and not live blockchain verification. |
| Website and application source | The repository contains `app.js` and an `app/` source directory. | A successful build, deployment, runtime, test suite, or production application. |

### Website/application functionality: not validated

**The website and application code in this repository have not been validated as a functioning, deployable application.** The repository's root does not contain a `package.json`; `app.js` imports Express, and the `app/` directory contains Next.js-oriented source. The previous `.github/workflows/nextjs.yml` deployment workflow has been removed. No active deployment workflow is represented as part of the current repository setup.

Consequently, this repository should presently be treated as a public framework, architecture, and documentation repository—not as a verified software release or a confirmed working website deployment. No claim is made here that the application builds, starts, passes tests, or deploys successfully. Those outcomes require a separately defined and tested application setup.

The workflow removal means the obsolete Next.js deployment attempt is no longer configured through that deleted workflow; it does not itself validate or repair the application source.

## 7. ECONOMIC ANALYSIS AND EVIDENCE DISCIPLINE

The repository includes manufacturer-facing economic analyses and illustrative case studies concerning information retrieval, identity reconciliation, component traceability, and potential reductions in repetitive information work.

All modeled savings, labor rates, software expenditures, registration prices, revenue participation, and manufacturer scenarios must be read with the assumptions and qualifications in the individual source documents. Illustrative calculations are not measured customer outcomes, audited industry averages, guaranteed savings, or customer commitments.

In particular:

- Task-level savings and broader annual information-work scenarios are separate models and must not be added together unless a documented model explicitly supports that calculation.
- Hypothetical software expenditure is not automatically a PITN saving or a verified market average.
- Registration pricing and any namespace-owner revenue participation depend on actual pricing, eligibility, and applicable agreements.
- A blockchain transaction or namespace registration is not proof of physical authenticity, manufacturer authorization, certification, technical accuracy, or compatibility.

Primary economic document: [PITN Universal Manufacturer Economic, Persistent Identity, Blockchain Namespace and Commercial Value Analysis](./PITN_UNIVERSAL_MANUFACTURER_ECONOMIC_AND_COMMERCIAL_ANALYSIS.md).

Related case study: [How POWER IN THE NUMBERS Can Reduce Robotics Information Costs](./costsavings.md).

## 8. REPOSITORY CONTENTS

Key documents currently maintained in this repository include:

- [`PITN.txt`](./PITN.txt) — foundational PITN material, including the earlier proposed 27-namespace taxonomy; treat its count as legacy pending reconciliation with the current 34-namespace architecture.
- [`PITN_UNIVERSAL_MANUFACTURER_ECONOMIC_AND_COMMERCIAL_ANALYSIS.md`](./PITN_UNIVERSAL_MANUFACTURER_ECONOMIC_AND_COMMERCIAL_ANALYSIS.md) — consolidated manufacturer, economic, identity, blockchain namespace, and commercial analysis.
- [`PITN_DIGITAL_IDENTITY_COMPONENT_PASSPORT_AND_ROBOTICS_TRACEABILITY_ARCHITECTURE.txt`](./PITN_DIGITAL_IDENTITY_COMPONENT_PASSPORT_AND_ROBOTICS_TRACEABILITY_ARCHITECTURE.txt) — digital identity, component passport, BOM, and robotics traceability architecture.
- [`costsavings.md`](./costsavings.md) — illustrative robotics information-cost case study.
- [`docs/`](./docs/) — supporting architecture and review documentation.
- [`SEO-STRATEGY.md`](./SEO-STRATEGY.md) — website and discoverability planning material.
- [`app.js`](./app.js) and [`app/`](./app/) — application-related source files; not currently certified as buildable or deployable.

## 9. PUBLIC PROJECT REFERENCES

The following are project reference links, not assertions that each service or demonstration has passed a current operational test:

- [POWER IN THE NUMBERS](https://powerinthenumbers.ai/)
- [ROBOPARTS.ai](https://roboparts.ai/)
- [ROBOTRAITS](https://powerinthenumbers.ai/robotraits)
- [Humanoids.select](https://humanoids.select/)
- [PITN Factory01 passport demonstration](https://powerinthenumbers.ai/passport/factory01)
- [PITN identity and scanning demonstration](https://powerinthenumbers.ai/identity#scan)
- [Research publication: Beyond the Machine — Building the Infrastructure That Connects Robotics](https://zenodo.org/records/24168975)
- [DOI: 10.5281/zenodo.24168975](https://doi.org/10.5281/zenodo.24168975)

## 10. INTENDED SCOPE

PITN is intended to establish a shared identity and information foundation for robotics and manufacturing: connecting physical components to their product definitions, manufacturers, identifiers, assemblies, robots, capabilities, lifecycle records, and supporting information.

It is designed to preserve the roles of existing systems while making identity relationships more consistent, persistent, and traceable across organizational and technical boundaries.

The seven initiatives provide complementary areas of application built around that shared foundation.

**POWER IN THE NUMBERS (PITN)**  
**Author: Aaron Bailot**  
**ORCID: 0009-0006-2810-6829**
