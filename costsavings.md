# How POWER IN THE NUMBERS Can Reduce Robotics Information Costs

## An Illustrative Manufacturer Case Study Connecting Robot Identity, Component Identity, Digital Passports, and ROBOPARTS.ai

**Author: Aaron Bailot**  
**POWER IN THE NUMBERS (PITN)**  
https://www.powerinthenumbers.ai

**Related resources**

- POWER IN THE NUMBERS: https://www.powerinthenumbers.ai
- ROBOPARTS.ai: https://www.roboparts.ai
- ROBOTRAITS: https://powerinthenumbers.ai/robotraits
- Humanoids.select: https://humanoids.select
- PITN Factory01 Passport Demonstration: https://powerinthenumbers.ai/passport/factory01
- PITN Identity and Scanning Demonstration: https://powerinthenumbers.ai/identity#scan
- Research paper: *Beyond the Machine: Building the Infrastructure That Connects Robotics*  
  https://doi.org/10.5281/zenodo.24168975

---

## 1. Executive Summary

Robotics manufacturers, integrators, and operators manage large amounts of information about machines, components, suppliers, configurations, maintenance, replacement parts, and product revisions.

Much of this information is distributed across separate systems, spreadsheets, engineering documents, supplier catalogs, purchasing records, maintenance platforms, and individual employees.

The resulting information costs are substantial. Before a company can make a decision about a component, it may need to establish:

- Which robot or machine is involved?
- Which component is installed?
- Which manufacturer produced it?
- What product model and revision does it belong to?
- Which individual physical unit is being inspected?
- Where was it installed?
- What documentation applies?
- What is its maintenance and replacement history?
- Is the proposed replacement actually compatible?
- What evidence supports the information?

POWER IN THE NUMBERS (PITN) addresses this problem through persistent digital identity, structured information, and connected records.

ROBOPARTS.ai applies these concepts to robotic components, product identity, physical-instance identity, bills of materials (BOMs), lifecycle information, and supplier-related workflows.

The central proposition is straightforward:

**When a physical robot and its components can be identified consistently and connected to structured information, organizations can spend less time locating, reconciling, and re-entering information.**

This document explains the concept through a fictional robotics manufacturer and then maps the proposed approach against the publicly visible PITN Factory01 humanoid passport and identity-scanning demonstrations.

The manufacturer, robot, actuator, serial number, operational records, and financial figures used in the case study are illustrative. They do not represent a real customer deployment or measured customer savings.

---

## 2. The Three Levels of Identity

A robotics information system must distinguish between the identity of a robot, the identity of a component product, and the identity of an individual physical component.

These are related, but they are not interchangeable.

### 2.1 Robot identity: ROBOT-001

`ROBOT-001` identifies a particular robot asset in this illustrative example.

It represents the individual machine, not every robot of the same model.

A robot record could contain:

| Field | Illustrative value |
|---|---|
| Robot asset ID | ROBOT-001 |
| Manufacturer | Example Robotics |
| Robot model | HX-1 |
| Configuration revision | CONFIG-01 |
| Unit class | Humanoid Autonomous Robot |
| Manufacturing date | 2026-01-15 |
| Current status | Active |
| Location | Factory A |
| Passport reference | ROBOT-001 |

The robot identity provides a persistent reference point for information about the individual machine.

It can connect the robot to its configuration, bill of materials, installed components, service events, inspections, and lifecycle records.

A critical distinction is necessary:

A manufacturer may create a product-level BOM for a robot model before any individual robot has been manufactured. Therefore, an individual robot asset ID should not be mandatory for every BOM.

The data model should support both:

1. **Product configuration BOM:** Describes the intended components for a robot model and configuration revision.
2. **Physical robot BOM:** Describes the components installed in one specific robot, such as `ROBOT-001`.

This distinction allows the architecture to support engineering and manufacturing before it is connected to a particular physical machine.

### 2.2 Component product identity: ACT-220

`ACT-220` identifies an actuator product.

It describes a product type or model, not one particular physical actuator.

A component product record could contain:

| Field | Illustrative value |
|---|---|
| Component product ID | ACT-220 |
| Component type | Actuator |
| Manufacturer | Example Motion Systems |
| Manufacturer part number | EMS-ACT-220 |
| Product revision | Rev A |
| Product description | Compact robotic joint actuator |
| Interface specification | Manufacturer-supplied specification |
| Technical documentation | Documentation reference |
| Lifecycle status | Active |
| Compatibility status | Not assessed |

This record describes the actuator product and the information applicable to that product revision.

It can be reused wherever that product is specified, purchased, evaluated, or installed.

### 2.3 Physical component identity: SN-1001

`SN-1001` identifies one individual physical actuator.

It is an instance of the product identified by `ACT-220`.

A physical component record could contain:

| Field | Illustrative value |
|---|---|
| Component instance ID | SN-1001 |
| Component product ID | ACT-220 |
| Manufacturer serial number | SN-1001 |
| Manufacturing date | 2026-02-10 |
| Manufacturing batch | BATCH-026 |
| Current status | Installed |
| Installation reference | ROBOT-001 |
| Installation position | Left shoulder |
| Passport reference | SN-1001 |

The distinction is important:

- `ACT-220` identifies the actuator product.
- `SN-1001` identifies one physical actuator manufactured as an instance of that product.
- `ROBOT-001` identifies the robot in which that physical actuator is installed.

If another actuator of the same product is installed in another robot, it can share the product identity `ACT-220` while having a different physical-instance identity.

For example:

| Robot | Product identity | Physical instance |
|---|---|---|
| ROBOT-001 | ACT-220 | SN-1001 |
| ROBOT-002 | ACT-220 | SN-1002 |
| ROBOT-003 | ACT-220 | SN-1003 |

This creates a structured relationship between machines, products, and physical components.

---

## 3. The Manufacturer's Information-Cost Problem

Consider a fictional robotics manufacturer operating 500 humanoid robots across several facilities.

Each robot contains hundreds of components. Some components are standardized, while others have different manufacturers, revisions, interfaces, specifications, and lifecycle requirements.

An engineer investigating an actuator replacement might need to:

1. Locate the robot's configuration.
2. Find the relevant BOM.
3. Identify the actuator product.
4. Confirm the product revision.
5. Identify the installed physical actuator.
6. Find its serial number.
7. Locate the manufacturer's documentation.
8. Review installation and maintenance history.
9. Determine whether a proposed replacement has sufficient compatibility evidence.
10. Record the decision.

If this information is distributed across disconnected systems, the same research may be repeated by engineering, procurement, maintenance, quality, and operations personnel.

The cost is not limited to searching.

It also includes:

- Re-entering information.
- Resolving inconsistent identifiers.
- Correcting duplicate records.
- Locating obsolete documentation.
- Reconciling product revisions.
- Investigating component provenance.
- Reconstructing maintenance history.
- Repeating supplier inquiries.
- Delaying decisions while information is collected.

PITN's opportunity is to reduce this information friction by connecting identities to structured, reusable records.

The objective is not to replace every existing enterprise system. It is to provide a consistent identity and information layer that can connect records that otherwise remain fragmented.

---

## 4. How PITN's Existing Humanoid Identity and Passport Examples Relate

PITN already presents publicly accessible examples of digital identity and passport concepts through its humanoid-related demonstrations.

Two relevant examples are:

**Factory01 Passport**  
https://powerinthenumbers.ai/passport/factory01

**Identity and scanning demonstration**  
https://powerinthenumbers.ai/identity#scan

These examples are useful because they illustrate how a humanoid unit can be associated with a recognizable digital identity and a passport-style information page.

They provide a conceptual starting point for extending the same identity approach to robotic components.

### 4.1 Publicly visible Factory01 passport information

The publicly visible Factory01 passport example presents the following information:

| Visible field or label | Displayed value |
|---|---|
| Alias / identity | Factory01.humanoids |
| Status | Active |
| Identity | Verified Demo Identity |
| Unit | Factory 01 |
| Network | Humanoids |
| Unit class | Industrial Assembly — Humanoid |
| Registered | 2026-08-01 |
| Location | Houston Pilot Site |

The passport connects a recognizable humanoid identity with a set of descriptive attributes.

The important architectural concept is that the identity acts as a reference through which associated information can be presented.

A manufacturer could apply a similar concept to its own robots, components, and physical component instances.

### 4.2 Publicly visible identity demonstration

The PITN identity page describes a Web2-to-Web3 identity funnel.

The publicly described sequence includes:

1. Discovery through a Web2-facing page.
2. Registration or association with a digital identity.
3. Access to a passport-style identity page.
4. Scanning a QR code.
5. Opening the associated unit's passport.
6. Viewing identity and descriptive information without requiring the viewer to install an application or connect a wallet.

The Factory01 identity screen displays:

| Visible field or label | Displayed value |
|---|---|
| Identity | Factory01.humanoids |
| Identity status | Digital Identity Verified |
| Identity type | Humanoid Autonomous Unit |
| Unit | Factory 01 |
| Network | Humanoids |
| Registered | 2026-08-01 |

**Important technical qualification:** The Factory01 identity screen explicitly identifies itself as a demonstration and states that it is not connected to a live blockchain verification service yet.

Accordingly, the displayed verification language must not be interpreted as proof of live blockchain verification, independently authenticated physical identity, or a completed cryptographic verification process.

The public pages demonstrate visible identity and passport concepts. They do not, by themselves, establish the underlying database schema, API implementation, cryptographic architecture, QR payload format, or production deployment status.

That distinction is essential when evaluating what can be reused.

---

## 5. Applying the Passport Concept to Robotics Components

The Factory01 example associates a humanoid unit with a digital identity and passport-style information.

ROBOPARTS.ai can extend the same general concept across three related identity levels.

### 5.1 Robot passport

A robot passport would identify a particular robot asset.

Illustrative identity:

`ROBOT-001`

Potential information:

| Field | Purpose |
|---|---|
| Robot asset ID | Persistent identity of the individual robot |
| Manufacturer | Identifies the manufacturer |
| Robot model | Identifies the product model |
| Configuration revision | Identifies the applicable configuration |
| Unit class | Describes the robot category |
| Manufacturing date | Records the manufacturing date |
| Registration date | Records when the identity record was created |
| Current status | Records the stated operational or lifecycle status |
| Location | Records an authorized location value |
| BOM reference | Connects the robot to its installed-component register |
| Lifecycle history | Connects service, inspection, and other recorded events |
| Evidence references | Links supporting documentation and records |

The robot passport provides the top-level identity for the physical machine.

### 5.2 Component product passport

A component product passport would identify a component model or product.

Illustrative identity:

`ACT-220`

Potential information:

| Field | Purpose |
|---|---|
| Component product ID | Identifies the product record |
| Component type | Identifies the component category |
| Manufacturer | Identifies the stated manufacturer |
| Manufacturer part number | Connects to the manufacturer's product reference |
| Product revision | Identifies the applicable revision |
| Product description | Describes the product |
| Technical specifications | Stores or references product specifications |
| Interface information | Describes mechanical, electrical, and communication interfaces |
| Documentation references | Connects manuals, drawings, and specifications |
| Lifecycle status | Records the stated product lifecycle status |
| Compatibility evidence | References evidence supporting compatibility assessments |
| Provenance references | Connects available source and origin records |

The product passport is reusable across every physical instance of that product.

### 5.3 Physical component passport

A physical component passport would identify one manufactured component.

Illustrative identity:

`SN-1001`

Potential information:

| Field | Purpose |
|---|---|
| Component instance ID | Identifies the individual physical component |
| Manufacturer serial number | Records the manufacturer's serial number |
| Component product ID | Connects the instance to ACT-220 |
| Manufacturing batch | Records the stated production batch |
| Manufacturing date | Records the stated manufacturing date |
| Current status | Records the stated lifecycle or operational status |
| Current installation | Identifies the robot or assembly where installed |
| Installation position | Identifies the component's position |
| Maintenance events | Connects recorded service history |
| Inspection events | Connects recorded inspection history |
| Replacement history | Connects removal and replacement events |
| Evidence references | Links supporting records |

This is where the system moves beyond identifying a product type and begins tracking an individual physical item throughout its lifecycle.

---

## 6. Technical Mapping: Factory01 Passport Fields to ROBOPARTS.ai

The following table maps publicly visible Factory01 information to a proposed ROBOPARTS data model.

The mapping distinguishes directly observed information from proposed extensions.

| Factory01 visible field | Proposed ROBOPARTS destination | Mapping action | Assessment |
|---|---|---|---|
| Factory01.humanoids | `robot_asset.identity_alias` or identity reference | Reuse concept | Existing identity alias concept can be applied to a robot asset |
| Active | `robot_asset.status` | Reuse concept | Status field can be retained, with controlled status definitions |
| Verified Demo Identity | `identity_record.verification_status` | Extend | Must distinguish demonstration labels from actual verification evidence |
| Factory 01 | `robot_asset.display_name` | Reuse concept | Human-readable unit name |
| Humanoids | `robot_asset.network` or `identity_namespace` | Extend | Namespace or network association should be explicitly defined |
| Industrial Assembly — Humanoid | `robot_asset.unit_class` | Reuse concept | Maps to robot classification |
| 2026-08-01 | `identity_record.registered_at` | Reuse concept | Registration timestamp or date |
| Houston Pilot Site | `robot_asset.location_reference` | Extend | Location should be structured and subject to access controls |
| Humanoid Autonomous Unit | `robot_asset.identity_type` | Reuse concept | Describes the identity category |
| Digital Identity Verified | `identity_record.verification_status` | Extend | Requires a defined verification method and supporting evidence |

### 6.1 What can be reused conceptually

The existing visible demonstration provides several useful concepts:

- A recognizable identity or alias.
- A unit name.
- A classification.
- A status.
- A registration date.
- A location.
- A passport-style presentation.
- A QR-oriented access experience.

These concepts can be carried into the ROBOPARTS architecture.

There is no need to invent a completely different user-facing identity experience for every component category.

### 6.2 What needs extending

The Factory01 passport example is centered on a humanoid unit.

A component information system requires additional data structures:

- Product identity.
- Physical-instance identity.
- Manufacturer part numbers.
- Manufacturer serial numbers.
- Product revisions.
- BOM relationships.
- Installation positions.
- Parent-child component relationships.
- Lifecycle events.
- Maintenance and inspection records.
- Documentation and evidence references.
- Compatibility assessments.
- Supplier and sourcing references.

These are extensions to the information model, not merely additional labels on a passport page.

### 6.3 What must not be assumed

The public demonstrations do not establish that the following capabilities are already implemented:

- A complete ROBOPARTS component registry.
- A production-ready component database.
- A live blockchain verification service.
- Cryptographic verification of physical components.
- A production QR resolver.
- Manufacturer-authorized serial-number validation.
- Automated compatibility determination.
- Complete lifecycle event recording.
- Production API integrations.
- Production security and access-control behavior.

These capabilities require inspection of the actual source code, database definitions, API contracts, configuration, and deployment evidence.

The correct approach is to reuse demonstrated identity and passport concepts while verifying the underlying implementation before claiming technical equivalence.

---

## 7. Proposed ROBOPARTS.ai Data Architecture

The following model connects the robot, its configuration, its BOM, the component product, and the individual physical component.

### 7.1 Core relationship

```text
ROBOT MODEL / CONFIGURATION
             |
             v
       CONFIGURATION BOM
             |
             v
          BOM LINE
             |
             v
     COMPONENT PRODUCT
          ACT-220
             |
             v
    PHYSICAL COMPONENT
          SN-1001
             |
             v
       INSTALLATION
             |
             v
         ROBOT ASSET
         ROBOT-001
```

This is a conceptual relationship diagram, not a claim that the existing database already implements every entity or relationship.

### 7.2 Recommended logical entities

| Entity | Purpose |
|---|---|
| `robot_model` | Defines the robot product model |
| `robot_configuration` | Defines a particular configuration and revision |
| `robot_asset` | Identifies an individual physical robot |
| `bom` | Defines a model-level or asset-level bill of materials |
| `bom_line` | Defines a component requirement or installed-component relationship |
| `component_product` | Defines a component product or model |
| `component_instance` | Identifies an individual physical component |
| `installation` | Records where and when an instance is installed |
| `lifecycle_event` | Records maintenance, inspection, replacement, or other events |
| `identity_record` | Stores identity references, aliases, and identity metadata |
| `evidence_reference` | Links supporting documents or evidence |
| `compatibility_assessment` | Records a compatibility assessment and its evidence |
| `supplier_record` | Identifies a supplier record |
| `source_record` | Records where imported or asserted information originated |

### 7.3 Important design distinction: model BOM versus physical robot BOM

A model-level BOM may exist before a robot is manufactured.

For example:

`HX-1 / CONFIG-01`

This describes the intended component configuration for the robot model.

A physical robot BOM describes what is actually installed in a specific machine.

For example:

`ROBOT-001`

This allows the manufacturer to distinguish between:

- What engineering specified.
- What manufacturing intended to install.
- What was actually installed.
- What was subsequently removed or replaced.

This distinction is essential for traceability and configuration management.

---

## 8. Proposed Identity and Record Fields

The following fields are a proposed mapping target. They should be reconciled with the actual ROBOPARTS repository schema before implementation.

### 8.1 Robot asset

```json
{
  "robot_asset_id": "ROBOT-001",
  "robot_model_id": "HX-1",
  "configuration_revision": "CONFIG-01",
  "manufacturer": "Example Robotics",
  "unit_class": "Humanoid Autonomous Robot",
  "status": "ACTIVE",
  "identity_alias": "Factory01.humanoids",
  "registered_at": "2026-08-01",
  "location_reference": "Factory A",
  "bom_id": "BOM-ROBOT-001"
}
```

This is an illustrative proposed record. The Factory01 alias and date are borrowed from the public demonstration as examples of visible fields; the remaining values are fictional.

### 8.2 Component product

```json
{
  "component_product_id": "ACT-220",
  "component_type": "ACTUATOR",
  "manufacturer": "Example Motion Systems",
  "manufacturer_part_number": "EMS-ACT-220",
  "product_revision": "REV-A",
  "description": "Compact robotic joint actuator",
  "lifecycle_status": "ACTIVE",
  "compatibility_status": "NOT_ASSESSED"
}
```

### 8.3 Physical component instance

```json
{
  "component_instance_id": "SN-1001",
  "manufacturer_serial_number": "SN-1001",
  "component_product_id": "ACT-220",
  "manufacturing_batch": "BATCH-026",
  "manufactured_at": "2026-02-10",
  "current_status": "INSTALLED",
  "installed_on_robot_asset_id": "ROBOT-001",
  "installation_position": "LEFT_SHOULDER"
}
```

### 8.4 BOM line

```json
{
  "bom_line_id": "BOMLINE-001",
  "bom_id": "BOM-ROBOT-001",
  "component_product_id": "ACT-220",
  "component_instance_id": "SN-1001",
  "quantity": 1,
  "installation_position": "LEFT_SHOULDER",
  "compatibility_status": "NOT_ASSESSED"
}
```

These records illustrate the separation between product-level information and instance-level information.

The same product can have many physical instances, and each physical instance can have its own installation and lifecycle history.

---

## 9. Identity Scanning: Mapping the Public Demonstration to a Component Workflow

The PITN identity page describes a QR-oriented process through which a user can access a unit's passport.

The same user-facing concept can be applied to ROBOPARTS.

The key is to make the QR code an access point to a persistent identity record rather than treating the QR code itself as the complete identity system.

### 9.1 Proposed scanning experience

An authorized manufacturer assigns a QR code to a component instance.

For example:

`SN-1001`

A technician scans the code using a phone.

The QR code directs the phone to a stable PITN/ROBOPARTS identity URL.

The system resolves the identifier and displays the associated component passport.

The passport could show:

- Component identity: `SN-1001`
- Product identity: `ACT-220`
- Manufacturer: Example Motion Systems
- Product revision: Rev A
- Current recorded status: Installed
- Installation reference: `ROBOT-001`
- Installation position: Left shoulder
- Registration date.
- Available documentation.
- Recorded maintenance events.
- Recorded inspection events.
- Available provenance information.
- Compatibility assessment status.

The technician can then access the information relevant to the component without manually searching across multiple records.

### 9.2 Proposed scanning sequence

```text
PHYSICAL COMPONENT
       |
       v
QR CODE SCANNED
       |
       v
IDENTITY URL OPENED
       |
       v
IDENTIFIER RESOLVED
       |
       v
COMPONENT INSTANCE LOOKUP
       |
       v
PRODUCT RECORD RETRIEVED
       |
       v
INSTALLATION / LIFECYCLE RECORDS
       |
       v
PASSPORT DISPLAYED
```

This describes a proposed workflow.

The actual implementation of the public Factory01 scanning demonstration must be examined before asserting that it already uses this exact technical sequence.

### 9.3 What the QR code should contain

The recommended approach is to encode a stable URL or opaque identity reference rather than embedding the complete component record in the QR code.

Illustrative URL:

```text
https://www.roboparts.ai/identity/SN-1001
```

The URL is an example only. It does not assert that this route currently exists.

The resolver should:

1. Receive the identity reference.
2. Validate the format.
3. Locate the corresponding identity record.
4. Retrieve the associated component instance.
5. Retrieve the linked product record.
6. Retrieve permitted installation and lifecycle information.
7. Apply access permissions.
8. Display the public or authorized passport view.

This approach allows the underlying record to be updated without requiring the physical QR code to be replaced every time a component's status or documentation changes.

### 9.4 Public and restricted information

Not every record should be visible to every person who scans a QR code.

A public passport may display:

- Public component identity.
- Product model.
- Manufacturer-provided public specifications.
- Public documentation.
- Public lifecycle status, where appropriate.

An authenticated manufacturer or operator view may additionally display:

- Internal asset associations.
- Detailed maintenance history.
- Inspection reports.
- Procurement records.
- Internal supplier information.
- Restricted technical documentation.
- Operational notes.

The system should enforce authorization on the server. Hiding information in the user interface alone is not sufficient access control.

### 9.5 Identity is not the same as authenticity

A QR code can identify a record, but the existence of a QR code does not prove that the physical component is genuine.

A robust implementation should distinguish:

- **Identity:** Which record is being referenced?
- **Registration:** Has a record been created?
- **Association:** Is the record associated with a stated manufacturer, product, or asset?
- **Authenticity:** What evidence supports the claim that the physical item is genuine?
- **Integrity:** Can unauthorized changes to records be detected?
- **Verification:** What process was used, who performed it, and what evidence supports the result?

A future verification process could use manufacturer-issued credentials, signed records, controlled registration, tamper-evident labels, cryptographic signatures, or other suitable mechanisms.

These are possible implementation approaches, not claims about the current Factory01 demonstration.

---

## 10. Compatibility and Evidence Must Be Explicit

One of the most important functions of a component information system is preventing assumptions from becoming operational facts.

A component should not be classified as compatible simply because it has a similar description, connector, product name, or physical appearance.

Compatibility may depend on:

- Mechanical dimensions.
- Mounting interfaces.
- Load capacity.
- Torque and speed requirements.
- Electrical voltage and current.
- Communication protocols.
- Firmware and software dependencies.
- Thermal limits.
- Safety requirements.
- Environmental operating conditions.
- Product revisions.
- Manufacturer restrictions.
- Application-specific validation.

ROBOPARTS should therefore distinguish between a component's stated attributes and a compatibility assessment.

Recommended initial statuses include:

| Status | Meaning |
|---|---|
| `NOT_ASSESSED` | No compatibility assessment has been recorded |
| `PENDING_REVIEW` | An assessment has been requested or is in progress |
| `VERIFIED_COMPATIBLE` | A defined assessment process has recorded compatibility with supporting evidence |
| `VERIFIED_INCOMPATIBLE` | A defined assessment process has recorded incompatibility with supporting evidence |
| `CONDITIONAL` | Compatibility is dependent on stated conditions |
| `UNKNOWN` | Available information is insufficient to determine compatibility |

The status should be accompanied by evidence references, assessment date, responsible party, scope, and applicable product revisions.

A customer-supplied compatibility statement must remain distinguishable from an independently validated result.

The system should never convert missing information into a positive compatibility claim.

---

## 11. How This Reduces Information Costs

The economic opportunity comes from making information reusable.

Without a connected identity and component-information structure, an employee may have to reconstruct the same information repeatedly.

With a structured identity system, the employee can begin with the robot or component identity and retrieve the associated records.

### 11.1 Illustrative task comparison

Consider a manufacturer handling 500 component-information tasks per year.

Examples include:

- Identifying a component.
- Locating applicable documentation.
- Confirming a product revision.
- Finding an individual serial-numbered component.
- Reviewing installation information.
- Locating a maintenance record.
- Preparing a sourcing inquiry.

Assume the following illustrative values:

| Measure | Before structured access | After structured access |
|---|---:|---:|
| Annual information tasks | 500 | 500 |
| Average time per task | 30 minutes | 10 minutes |
| Total annual hours | 250 | 83.33 |
| Loaded labor cost per hour | $60 | $60 |
| Annual information labor cost | $15,000 | $5,000 |

### 11.2 Illustrative savings calculation

Before:

```text
500 tasks × 0.5 hours = 250 hours

250 hours × $60 = $15,000
```

After:

```text
500 tasks × 0.1667 hours ≈ 83.33 hours

83.33 hours × $60 ≈ $5,000
```

Illustrative annual difference:

```text
$15,000 - $5,000 = $10,000
```

**Illustrative result: $10,000 in annual information-labor savings.**

This is a hypothetical calculation, not a measured PITN or ROBOPARTS customer result.

The example assumes a reduction from 30 minutes to 10 minutes per task. Actual savings would depend on the manufacturer's existing systems, data quality, number of tasks, employee costs, integration requirements, and adoption.

The calculation excludes potential additional benefits such as:

- Reduced engineering search time.
- Reduced procurement research.
- Faster maintenance preparation.
- Fewer duplicate records.
- Reduced documentation errors.
- Better configuration traceability.
- Faster replacement-part identification.
- Reduced delays caused by missing information.

These additional benefits should be measured separately rather than added to the illustrative savings figure without evidence.

### 11.3 Why the model can scale

The same component product record can support many robots.

For example, one `ACT-220` product record can be linked to:

- 50 individual actuator instances.
- 50 different robot installations.
- Multiple manufacturing batches.
- Multiple service histories.
- Multiple sourcing records.

The manufacturer does not need to reconstruct the product's basic information for every installation.

The product record is reused, while the individual physical-instance records preserve the unique history of each actuator.

This is the foundation of the information-cost reduction opportunity.

---

## 12. Mapping PITN Capabilities to the Manufacturer Workflow

| PITN / ROBOPARTS concept | Manufacturer application | Information-cost opportunity |
|---|---|---|
| Digital identity | Persistent robot identity | Reduces ambiguity about which machine is involved |
| Digital passport | Structured robot and component information | Reduces repeated information gathering |
| QR scanning | Direct access to an identity record | Reduces manual lookup |
| Component product identity | Shared product record | Avoids repeated product-data entry |
| Physical-instance identity | Individual serial-numbered component record | Supports instance-level traceability |
| BOM relationships | Connects robots and components | Reduces manual reconstruction of configurations |
| Lifecycle records | Connects service and inspection events | Reduces fragmented maintenance research |
| Documentation references | Links technical information | Reduces document-search time |
| Supplier information | Connects product and supplier records | Supports sourcing workflows |
| Compatibility assessments | Records evidence-based assessments | Reduces unsupported substitution decisions |
| Structured identifiers | Standardizes references across records | Reduces duplicate and inconsistent data |

The value is created through the relationships among these capabilities.

A digital passport alone is not the complete solution. Its value increases when it is connected to product identity, physical-instance identity, BOM data, lifecycle events, and supporting evidence.

---

## 13. What Should Be Reused, Extended, and Built

The most practical implementation approach is to build on the existing PITN identity and passport concepts rather than rebuild them as an unrelated product.

The following assessment is based on the publicly visible demonstrations and the proposed ROBOPARTS architecture. It is not a code-level audit.

### 13.1 Reuse conceptually

- Identity aliases and persistent references.
- Passport-style presentation.
- Unit classification.
- Status presentation.
- Registration information.
- Location information.
- QR-oriented access.
- A user-facing identity lookup experience.

### 13.2 Extend

- Identity records to support multiple identity classes.
- Robot passports to support component passports.
- Identity relationships to connect robots, products, and physical instances.
- Passport fields to support manufacturers, part numbers, revisions, and serial numbers.
- QR access to support component-level lookup.
- Status definitions to distinguish registration, lifecycle, and verification.
- Evidence references to support provenance and compatibility assessments.
- Access controls to support public and restricted information.

### 13.3 Build or verify as separate technical capabilities

- Component product registry.
- Physical component-instance registry.
- Model-level and physical-asset BOM relationships.
- Installation and removal records.
- Lifecycle event records.
- Supplier and sourcing relationships.
- Compatibility assessment workflow.
- Component identity resolution.
- QR URL routing and resolution.
- Record integrity and verification mechanisms.
- API and database integration.
- Automated import and export workflows.

These capabilities should be checked against the actual ROBOPARTS.ai repository before implementation decisions are finalized.

A feature that already exists in the repository should be reused or completed rather than duplicated. A feature that exists only as a concept should be identified as a development requirement.

---

## 14. Recommended Implementation Sequence

A practical development sequence can minimize unnecessary rebuilding.

### Stage 1 — Confirm the existing identity architecture

Review the existing PITN identity and passport implementation.

Document:

- Existing identity fields.
- Existing identity types.
- Existing passport fields.
- Existing URL structure.
- QR code generation method.
- QR destination and resolver behavior.
- Data retrieval process.
- Existing API routes.
- Existing database tables.
- Existing authentication and authorization.
- Existing verification logic, if any.

The objective is to establish what is implemented, what is demonstrable, and what remains conceptual.

### Stage 2 — Map existing identity fields to the ROBOPARTS model

Create a formal field mapping between:

- Existing humanoid identity.
- Robot asset identity.
- Component product identity.
- Physical component-instance identity.

Preserve useful existing field definitions where appropriate.

Avoid forcing product identity and physical-instance identity into one record.

### Stage 3 — Establish the component identity model

Implement or confirm:

- `component_product`
- `component_instance`
- `robot_asset`
- `robot_configuration`
- `bom`
- `bom_line`
- `installation`
- `lifecycle_event`
- `evidence_reference`

Use stable identifiers and explicit relationships.

### Stage 4 — Connect component passports to the identity resolver

Develop a component passport route that can resolve a component instance.

Illustrative route:

```text
/identity/SN-1001
```

The resolver should retrieve the component instance, its product record, and permitted associated information.

### Stage 5 — Implement the scanning workflow

Test the complete process:

1. Create a component product record.
2. Create a physical component-instance record.
3. Assign an identity reference.
4. Generate or associate a QR code.
5. Scan the QR code.
6. Resolve the identity.
7. Retrieve the correct component record.
8. Display the passport.
9. Confirm that restricted information is protected.
10. Record and test relevant lifecycle updates.

### Stage 6 — Validate the information-cost benefit

Run a controlled manufacturer pilot.

Measure:

- Time required to identify a component.
- Time required to retrieve documentation.
- Time required to locate an installation record.
- Time required to identify a replacement candidate.
- Number of duplicate or incomplete records.
- Number of repeated information requests.
- Employee time spent reconstructing component history.

Compare results before and after implementation.

Use actual measurements to establish the commercial value proposition.

---

## 15. Technical Questions That Require Source-Code or Implementation Review

The public Factory01 pages provide visible examples, but they do not expose enough technical detail to establish the exact underlying implementation.

The following questions should be answered through repository and application inspection.

### Identity structure

1. What database table or data object stores the Factory01 identity?
2. Is `Factory01.humanoids` the primary identifier, an alias, or a display label?
3. Is the identity associated with a unique internal record ID?
4. Are identity types defined through a controlled schema?
5. Can one identity reference be associated with multiple related records?

### Passport structure

6. Which fields are stored in the database?
7. Which fields are generated dynamically?
8. Which fields are hard-coded demonstration values?
9. How are status and verification labels represented?
10. Are passport fields configurable by identity type?

### QR and scanning

11. What information is encoded in the QR code?
12. Does it encode a URL, a record identifier, or another payload?
13. Which route receives the scan?
14. How is the identity resolved?
15. Does the resolver query a database or use a static mapping?
16. Can the same resolver support robot, product, and component-instance identities?

### Verification and integrity

17. What does the current demonstration mean by "verified"?
18. Is verification a stored status, an evidence-backed process, or a cryptographic operation?
19. Is any blockchain integration currently active?
20. Are records digitally signed?
21. Can changes to identity or passport records be audited?
22. Is there a process for manufacturer-issued identity credentials?

### Security and access

23. Which passport fields are public?
24. Which fields require authentication?
25. How are internal maintenance and supplier records protected?
26. Are access decisions enforced by the backend?
27. Are scan events logged?
28. Can a passport be revoked, corrected, or superseded?

These questions define the difference between a visible demonstration and a fully specified production implementation.

---

## 16. Evidence and Implementation Boundaries

The following distinctions should be preserved in all technical, commercial, and investor-facing descriptions.

| Statement | Evidence position |
|---|---|
| PITN publicly presents a Factory01 humanoid passport | Visible on the public passport page |
| The passport displays identity, status, unit, network, class, registration date, and location | Visible on the public passport page |
| PITN publicly describes a QR-based identity-scanning experience | Described on the public identity page |
| The Factory01 identity screen displays "Digital Identity Verified" | Visible on the demonstration screen |
| The Factory01 screen states it is not connected to a live blockchain verification service yet | Explicitly stated on the demonstration screen |
| The public pages establish a complete production component registry | Not established |
| The public pages establish a production QR resolver implementation | Not established |
| The public pages establish cryptographic authenticity of physical components | Not established |
| The proposed ROBOPARTS model can extend the identity and passport concepts | Architectural proposal |
| The proposed information-cost savings are measured customer results | No; they are illustrative calculations |

This distinction protects the credibility of the PITN proposition.

The value of the architecture should be demonstrated through its actual records, relationships, workflows, and measurable results rather than unsupported claims.

---

## 17. Commercial Significance

The commercial opportunity is not limited to displaying a digital passport.

It is the ability to connect a robot and its components to reusable, structured information throughout their lifecycle.

A manufacturer can use this structure to improve:

- Engineering configuration management.
- Component identification.
- Manufacturing traceability.
- Procurement research.
- Maintenance preparation.
- Replacement-part identification.
- Supplier information management.
- Documentation access.
- Lifecycle recordkeeping.
- Configuration change analysis.

ROBOPARTS.ai can serve as the component-focused information layer connecting these activities.

A manufacturer does not need to replace its existing engineering, manufacturing, procurement, or maintenance platforms to begin evaluating this approach.

A practical starting point is to connect a defined group of robot assets and components, import a representative BOM, establish product and physical-instance identities, and test the passport and scanning workflow.

The manufacturer can then measure the time required to retrieve information before and after the records are connected.

This creates a practical basis for evaluating adoption and return on investment.

---

## 18. Conclusion

The three identifiers in this example represent three different but connected levels of identity:

- `ROBOT-001` identifies an individual robot.
- `ACT-220` identifies an actuator product.
- `SN-1001` identifies one physical actuator.

Connecting these records creates a structured relationship between a machine, its intended configuration, its installed components, and the individual physical items that make up the machine.

The publicly visible PITN Factory01 passport and identity-scanning demonstrations provide a useful starting point for the user-facing identity and passport concepts.

ROBOPARTS.ai can extend those concepts into a component-level information architecture by adding product identity, physical-instance identity, BOM relationships, installation records, lifecycle history, supplier references, and evidence-backed compatibility assessments.

The potential economic benefit is a reduction in the time and effort required to locate, reconcile, and reuse information.

The proposed architecture does not depend on treating a QR code as proof of authenticity, a passport label as proof of verification, or an untested compatibility statement as an engineering approval.

Instead, it creates a structured path from identity to information, from information to evidence, and from evidence to more efficient operational decisions.

**POWER IN THE NUMBERS provides the broader identity and information framework. ROBOPARTS.ai applies that framework to the component-level information requirements of robotics.**

The objective is to make robotic systems and their components easier to identify, understand, trace, maintain, and source.

---

## 19. References

**POWER IN THE NUMBERS**  
https://www.powerinthenumbers.ai

**ROBOPARTS.ai**  
https://www.roboparts.ai

**ROBOTRAITS**  
https://powerinthenumbers.ai/robotraits

**Humanoids.select**  
https://humanoids.select

**PITN Factory01 Passport Demonstration**  
https://powerinthenumbers.ai/passport/factory01

**PITN Identity and Scanning Demonstration**  
https://powerinthenumbers.ai/identity#scan

**Research paper: Beyond the Machine: Building the Infrastructure That Connects Robotics**  
https://doi.org/10.5281/zenodo.24168975

---

## 20. Attribution and Illustrative Material Notice

Prepared by **Aaron Bailot** for **POWER IN THE NUMBERS**.

All robot names, manufacturer names, component identifiers, serial numbers, facilities, dates, sample records, and financial calculations in the manufacturer case study are illustrative unless expressly identified as visible information from the public PITN Factory01 demonstration.

The public Factory01 identity and passport pages are referenced to explain the visible PITN demonstration. Their appearance or fields should not be interpreted as evidence of a live blockchain verification service or of production implementation details not publicly established.

The proposed JSON records, entity relationships, QR routes, and technical workflows are original illustrative examples created for this document. They are not representations of an existing customer's confidential system or a claim that every proposed feature is already implemented.

Any future diagrams or images used with this document should be original conceptual illustrations or appropriately licensed material. Illustrations should not imitate identifiable third-party products, imply endorsement, or be presented as photographs of actual PITN customer deployments.

This document is an architectural and commercial explanation, not a certification of security, compatibility, authenticity, regulatory compliance, or production readiness.
