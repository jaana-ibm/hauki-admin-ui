import React from 'react';
import { ArrayField, Control, useFieldArray } from 'react-hook-form';
import { IconCalendarPlus } from 'hds-react';
import { SecondaryButton } from '../../components/button/Button';
import { GroupRuleFormFormat, UiRuleConfig } from '../../common/lib/types';
import Rule from './Rule';

export default function Rules({
  groupIndex,
  namePrefix,
  control,
  ruleConfig,
  register,
  setValue,
}: {
  groupIndex: number;
  namePrefix: string;
  control: Control;
  ruleConfig: UiRuleConfig;
  register: Function;
  setValue: Function;
}): JSX.Element {
  const ruleNamePrefix = `${namePrefix}[${groupIndex}].rules`;
  const { fields, remove, append } = useFieldArray({
    control,
    name: ruleNamePrefix,
    keyName: 'rulesUiId',
  });

  return (
    <>
      <div className="form-group rule-group">
        <h3 className="opening-period-section-title">
          Aukioloaikojen voimassaolo
        </h3>
        <ul
          className="opening-period-field-list opening-period-rule-list"
          data-test="rule-list">
          {fields.map(
            (
              rule: Partial<ArrayField<Record<string, GroupRuleFormFormat>>>,
              index: number
            ) => (
              <li
                className="opening-period-field-list-item opening-period-rule-list-item"
                key={`rule-${rule.id || index}`}
                data-test={`rule-list-item-${rule.id || index}`}>
                <Rule
                  namePrefix={ruleNamePrefix}
                  index={index}
                  groupIndex={groupIndex}
                  rule={rule}
                  control={control}
                  setValue={setValue}
                  remove={remove}
                  register={register}
                  ruleConfig={ruleConfig}
                />
              </li>
            )
          )}
        </ul>
      </div>
      <div className="form-group">
        <SecondaryButton
          dataTest={`add-new-rule-button-${groupIndex}`}
          iconLeft={<IconCalendarPlus />}
          onClick={(): void => append({})}>
          Lisää aukioloaikojen voimassaolosääntö
        </SecondaryButton>
      </div>
    </>
  );
}
